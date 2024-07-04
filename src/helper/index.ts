export const handleResponseMessage = (message: string): string => {
  const messageList: Record<string, string> = {
    // Auth
    'auth/too-many-requests': 'Too many attempts, please try later.',
    'auth/missing-password': 'The password is missing.',
    'auth/missing-email': 'The email is missing.',
    'auth/invalid-email': "The provided email doesn't exist.",
    'auth/invalid-credential': 'Invalid credentials provided.',
    'auth/user-not-found': 'No user found with this email.',
    'auth/wrong-password': 'Incorrect password. Please try again.',
    'auth/email-already-in-use': 'This email is already in use.',
    'auth/weak-password': 'The password is too weak.',
    'auth/user-disabled':
      'The user account has been disabled by an administrator.',
    'auth/operation-not-allowed':
      'This operation is not allowed. Please enable it in the Firebase console.',
    'auth/requires-recent-login':
      'This operation is sensitive and requires recent authentication. Log in again before retrying this request.',
    'auth/account-exists-with-different-credential':
      'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.',
    'auth/invalid-verification-code':
      'The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code and try again.',
    'auth/invalid-verification-id':
      'The verification ID used to create the phone auth credential is invalid.',
    'auth/session-cookie-expired':
      'The session cookie has expired. Please log in again.',
    'auth/session-cookie-revoked': 'The session cookie has been revoked.',
    'auth/invalid-phone-number': 'The phone number is in an invalid format.',
    'auth/invalid-user-token':
      'The user token is invalid or expired. Please log in again.',
    'auth/network-request-failed': 'Network error, please try again later.',
    'auth/credential-already-in-use':
      'This credential is already associated with a different user account.',
    'auth/timeout': 'The operation has timed out. Please try again later.',
    'auth/app-not-authorized':
      'This app is not authorized to use Firebase Authentication.',
    'auth/captcha-check-failed':
      'The reCAPTCHA response token provided is either invalid, expired, or already used.',
    'auth/invalid-custom-token':
      'The custom token format is incorrect. Please check the documentation.',
    'auth/custom-token-mismatch':
      'The custom token corresponds to a different audience.',
    'auth/invalid-api-key':
      'Your API key is invalid. Please check you have copied it correctly.',
    'auth/app-deleted': 'This instance of the app has been deleted.',
  };

  return messageList[message] || 'Something went wrong!';
};
