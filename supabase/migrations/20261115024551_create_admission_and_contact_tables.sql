/*
# Create admission applications and contact messages tables

Plain-English summary: stores admission forms and contact-us messages submitted by visitors of the Bright Future Academy website.

1. New Tables
- `admission_applications`: one row per admission/registration request.
  - id, student_name, parent_name, mobile_number, email, class_level, subject, preferred_batch, created_at
- `contact_messages`: one row per message sent through the Contact Us form.
  - id, name, email, phone, message, created_at

2. Security
- Row level security is enabled on both tables.
- Visitors (anon and signed-in) may only INSERT rows. They cannot read, update, or delete any submissions, which keeps student and parent details private.
- Length checks on every text column guard against oversized input.

3. Important Notes
- No sign-in is required, so policies target both anon and authenticated roles.
- Submissions are only visible to the academy through the database dashboard.
*/

CREATE TABLE IF NOT EXISTS admission_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL CHECK (char_length(student_name) BETWEEN 2 AND 120),
  parent_name text NOT NULL CHECK (char_length(parent_name) BETWEEN 2 AND 120),
  mobile_number text NOT NULL CHECK (char_length(mobile_number) BETWEEN 7 AND 20),
  email text NOT NULL CHECK (char_length(email) BETWEEN 5 AND 254),
  class_level text NOT NULL CHECK (char_length(class_level) BETWEEN 1 AND 60),
  subject text NOT NULL CHECK (char_length(subject) BETWEEN 1 AND 60),
  preferred_batch text NOT NULL CHECK (char_length(preferred_batch) BETWEEN 1 AND 120),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 5 AND 254),
  phone text CHECK (phone IS NULL OR char_length(phone) <= 20),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE admission_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON admission_applications TO anon, authenticated;
GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "public_insert_admission_applications" ON admission_applications;
CREATE POLICY "public_insert_admission_applications" ON admission_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "public_insert_contact_messages" ON contact_messages;
CREATE POLICY "public_insert_contact_messages" ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
