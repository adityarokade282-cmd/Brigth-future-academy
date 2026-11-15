import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { isValidEmail, isValidPhone } from '@/lib/validation';
import { FormField } from '@/components/FormField';

interface ContactValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type ContactErrors = Partial<Record<keyof ContactValues, string>>;
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const EMPTY_VALUES: ContactValues = { name: '', email: '', phone: '', message: '' };

function validate(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};

  if (values.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!isValidEmail(values.email)) errors.email = 'Please enter a valid email address.';
  if (values.phone.trim() && !isValidPhone(values.phone)) errors.phone = 'Please enter a valid phone number.';
  if (values.message.trim().length < 5) errors.message = 'Please write a short message (at least 5 characters).';

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const updateField = (field: keyof ContactValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'submitting') return;

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');
    const { error } = await supabase.from('contact_messages').insert({
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim() || null,
      message: values.message.trim(),
    });

    if (error) {
      setStatus('error');
      return;
    }

    setValues(EMPTY_VALUES);
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="flex min-h-[26rem] flex-col items-center justify-center rounded-3xl bg-white p-10 text-center shadow-lift">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success-50 text-success-600 animate-fade-up">
          <CheckCircle2 className="h-9 w-9" />
        </span>
        <h3 className="mt-6 text-2xl font-bold text-ink-900">Message sent</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-500">
          Thanks for reaching out. Our team will reply to your email or phone shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 rounded-full border border-ink-200 px-6 py-3 text-sm font-bold text-ink-700 transition-colors hover:bg-ink-50"
        >
          Send another message
        </button>
      </div>
    );
  }

  const isSubmitting = status === 'submitting';

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-3xl bg-white p-6 shadow-lift sm:p-8" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="contactName" label="Your Name" required error={errors.name}>
          <input
            id="contactName"
            name="name"
            autoComplete="name"
            className="field-input"
            placeholder="Full name"
            value={values.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contactName-error' : undefined}
            onChange={(event) => updateField('name', event.target.value)}
          />
        </FormField>

        <FormField id="contactPhone" label="Phone (optional)" error={errors.phone}>
          <input
            id="contactPhone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="field-input"
            placeholder="+91 98765 43210"
            value={values.phone}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'contactPhone-error' : undefined}
            onChange={(event) => updateField('phone', event.target.value)}
          />
        </FormField>

        <div className="sm:col-span-2">
          <FormField id="contactEmail" label="Email" required error={errors.email}>
            <input
              id="contactEmail"
              name="email"
              type="email"
              autoComplete="email"
              className="field-input"
              placeholder="you@example.com"
              value={values.email}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'contactEmail-error' : undefined}
              onChange={(event) => updateField('email', event.target.value)}
            />
          </FormField>
        </div>

        <div className="sm:col-span-2">
          <FormField id="contactMessage" label="Message" required error={errors.message}>
            <textarea
              id="contactMessage"
              name="message"
              rows={5}
              className="field-input resize-none"
              placeholder="Tell us which class or course you are interested in..."
              value={values.message}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'contactMessage-error' : undefined}
              onChange={(event) => updateField('message', event.target.value)}
            />
          </FormField>
        </div>
      </div>

      {status === 'error' && (
        <div role="alert" className="mt-5 rounded-xl border border-error-100 bg-error-50 px-4 py-3 text-sm text-error-700">
          Your message could not be sent. Please try again in a moment.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
