export const metadata = {
  title: 'Error',
  description: 'An error occurred.',
};

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-light">
      <div className="container-custom text-center max-w-2xl">
        <h1 className="text-6xl font-bold text-brand-blue mb-4">Error</h1>
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Something went wrong
        </h2>
        <p className="text-lg text-text-secondary mb-8">
          We're sorry for the inconvenience. Our team has been notified.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="btn-primary"
          >
            Try Again
          </button>
          <a href="/" className="btn-secondary">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
