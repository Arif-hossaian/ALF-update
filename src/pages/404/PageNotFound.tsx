import { Link } from 'react-router-dom';
import { Button } from '../../shared/Button';

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-4 text-5xl font-bold">404</h1>

      <h6 className="mb-2 text-center text-3xl font-bold text-gray-800 dark:text-gray-50">
        Oops! page not found.
      </h6>

      <p className="mb-4 text-center">
        {`Sorry, we couldn't find the page you're looking for.`}
      </p>
      <Link to="/">
        <Button
          className="ml-5 mt-7 border-solid border-2 border-green-300"
          variant="ghost"
          size="md"
        >
          Back to home
        </Button>
      </Link>
    </div>
  );
}
