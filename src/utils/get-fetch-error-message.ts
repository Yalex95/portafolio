export default function getFetchErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }

  if (
    typeof error === 'object' &&
    error !== null &&
    'statusMessage' in error
  ) {
    return String((error as any).statusMessage)
  }

  return 'An unknown error occurred.'
}