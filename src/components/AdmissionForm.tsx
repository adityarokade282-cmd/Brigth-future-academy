import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Loader2, MessageCircle, RotateCcw } from 'lucide-react';
import { ACADEMY, BATCHES, CLASS_LEVEL_OPTIONS, SUBJECT_OPTIONS, WHATSAPP_URL } from '@/data/academy';
import { supabase } from '@/lib/supabase';
import { isValidEmail, isValidPhone } from '@/lib/validation';
import { FormField } from '@/components/FormField';

interface AdmissionValues {
  studentName: string;
  parentName: string;
  mobile: string;
  email: string;
  classLevel: string;
  subject: string;
  batch: string;
}

type AdmissionErrors = Partial<Record<keyof AdmissionValues, string>>;
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const EMPTY_VALUES: AdmissionValues = {
  studentName: '',
  parentName: '',
  mobile: '',
  email: '',
  classLevel: '',
  subject: '',
  batch: '',
};

const BATCH_OPTIONS = BATCHES.map(
  (batch) => `${batch.name} (${batch.mode}, ${batch.timing})`,
);

function validate(values: AdmissionValues): AdmissionErrors {
  const errors: AdmissionErrors = {};

  if (values.studentName.trim().length < 2) errors.studentName = 'Please enter the student\'s full name.';
  if (values.parentName.trim().length < 2) errors.parentName = 'Please enter the parent or guardian name.';
  if (!isValidPhone(values.mobile)) errors.mobile = 'Please enter a valid mobile number.';
  if (!isValidEmail(values.email)) errors.email = 'Please enter a valid email address.';
  if (!values.classLevel) errors.classLevel = 'Please select a class.';
  if (!values.subject) errors.subject = 'Please select a subject.';
  if (!values.batch) errors.batch = 'Please choose a preferred batch.';

  return errors;
}

export function AdmissionForm() {
  const [values, setValues] = useState<AdmissionValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<AdmissionErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [submittedName, setSubmittedName] = useState('');

  const updateField = (field: keyof AdmissionValues, value: string) => {
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
    const { error } = await supabase.from('admission_applications').insert({
      student_name: values.studentName.trim(),
      parent_name: values.parentName.trim(),
      mobile_number: values.mobile.trim(),
      email: values.email.trim(),
      class_level: values.classLevel,
      subject: values.subject,
      preferred_batch: values.batch,
    });

    if (error) {
      setStatus('error');
      return;
    }

    setSubmittedName(values.studentName.trim());
    setValues(EMPTY_VALUES);
    setStatus('success');
  };

  const resetForm = () => {
    setStatus('idle');
    setErrors({});
  };

  if (status === 'success') {
    return (
      <div className="flex min-h-[32rem] flex-col items-center justify-center rounded-3xl bg-white p-10 text-center shadow-lift">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-success-50 text-success-600 animate-fade-up">
          <CheckCircle2 className="h-10 w-10" />
        </span>
        <h3 className="mt-6 text-2xl font-bold text-ink-900">Registration received</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-500">
          Thank you, {submittedName}. Our admissions team will call you within 24 hours to confirm the batch and
          fee structure.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-success-600 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-success-700"
          >
            <MessageCircle className="h-4 w-4" />
            Confirm on WhatsApp
          </a>
          <button
            type="button"
            onClick={resetForm}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 px-6 py-3 text-sm font-bold text-ink-700 transition-colors hover:bg-ink-50"
          >
            <RotateCcw className="h-4 w-4" />
            Register another student
          </button>
        </div>
      </div>
    );
  }

  const isSubmitting = status === 'submitting';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl bg-white p-6 shadow-lift sm:p-10"
      aria-label="Admission form"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="studentName" label="Student Name" required error={errors.studentName}>
          <input
            id="studentName"
            name="studentName"
            autoComplete="off"
            className="field-input"
            placeholder="e.g. Aarav Singh"
            value={values.studentName}
            aria-invalid={Boolean(errors.studentName)}
            aria-describedby={errors.studentName ? 'studentName-error' : undefined}
            onChange={(event) => updateField('studentName', event.target.value)}
          />
        </FormField>

        <FormField id="parentName" label="Parent Name" required error={errors.parentName}>
          <input
            id="parentName"
            name="parentName"
            autoComplete="off"
            className="field-input"
            placeholder="e.g. Rajesh Singh"
            value={values.parentName}
            aria-invalid={Boolean(errors.parentName)}
            aria-describedby={errors.parentName ? 'parentName-error' : undefined}
            onChange={(event) => updateField('parentName', event.target.value)}
          />
        </FormField>

        <FormField id="mobile" label="Mobile Number" required error={errors.mobile}>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="field-input"
            placeholder="+91 98765 43210"
            value={values.mobile}
            aria-invalid={Boolean(errors.mobile)}
            aria-describedby={errors.mobile ? 'mobile-error' : undefined}
            onChange={(event) => updateField('mobile', event.target.value)}
          />
        </FormField>

        <FormField id="email" label="Email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="field-input"
            placeholder="parent@example.com"
            value={values.email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            onChange={(event) => updateField('email', event.target.value)}
          />
        </FormField>

        <FormField id="classLevel" label="Class Selection" required error={errors.classLevel}>
          <select
            id="classLevel"
            name="classLevel"
            className="field-input"
            value={values.classLevel}
            aria-invalid={Boolean(errors.classLevel)}
            aria-describedby={errors.classLevel ? 'classLevel-error' : undefined}
            onChange={(event) => updateField('classLevel', event.target.value)}
          >
            <option value="">Select class</option>
            {CLASS_LEVEL_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>

        <FormField id="subject" label="Subject Selection" required error={errors.subject}>
          <select
            id="subject"
            name="subject"
            className="field-input"
            value={values.subject}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            onChange={(event) => updateField('subject', event.target.value)}
          >
            <option value="">Select subject</option>
            {SUBJECT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>

        <div className="sm:col-span-2">
          <FormField id="batch" label="Preferred Batch" required error={errors.batch}>
            <select
              id="batch"
              name="batch"
              className="field-input"
              value={values.batch}
              aria-invalid={Boolean(errors.batch)}
              aria-describedby={errors.batch ? 'batch-error' : undefined}
              onChange={(event) => updateField('batch', event.target.value)}
            >
              <option value="">Select a batch</option>
              {BATCH_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </FormField>
        </div>
      </div>

      {status === 'error' && (
        <div role="alert" className="mt-6 rounded-xl border border-error-100 bg-error-50 px-4 py-3 text-sm text-error-700">
          We could not submit your registration. Please try again, or message us on WhatsApp at {ACADEMY.phone}.
        </div>
      )}

      <div className="mt-8 flex flex-col-reverse gap-4 border-t border-ink-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-ink-400">
          By submitting, you agree to be contacted by our admissions team about this enquiry.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary group disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit Registration
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
