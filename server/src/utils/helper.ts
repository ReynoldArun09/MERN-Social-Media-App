export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    INTERNAL_SERVER = 500,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
  }

  export enum ErrorMessage {

  }

  export enum SuccessMessage {
    ACCOUNT_ALREADY_REGISTERED = "Already registered",
    ACCOUNT_NOT_VERIFIED = "You are account has not been verified yet. Check your Email to verify your account.",
    ACCOUNT_REGISTERED_VERIFY_PENDING = "User registered. Please verify your email.",
    ACCOUNT_ALREADY_VERIFIED = 'You have been already Verified. you can login into your account.',
    EMAIL_VERIFIED_SUCCESS = "Email verified successfully",
    INVALID_EMAIL_ID = "Invalid email address",
    INVALID_PASSWORD = "Invalid email/password",
    ACCOUNT_BLOCKED = "Your Account has been blocked",
    ACCOUNT_DEACTIVATED = "Your Account has been Deactivated",
    LOGIN_SUCCESS = "You have logged In"
  }