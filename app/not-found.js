export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-light">
      <div className="container-custom text-center max-w-2xl">
        <h1 className="text-6xl font-bold text-brand-blue mb-4">404</h1>
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-text-secondary mb-8">
          Sorry, the page you're looking for doesn't exist. But we'd love to help
          with your next project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/" className="btn-primary">
            Back to Home
          </a>
          <a href="/contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
