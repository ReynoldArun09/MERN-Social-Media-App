export const verifyTemplate = (verificationLink: string, name: string) => {
  return `
    <div style="max-width: 600px; margin: auto; background-color: #f4f4f4; border-radius: 10px; padding:20px; box-shadow: 0 2px 4px rgb(102, 182, 255);">
        <div style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); max-width: 500px; text-align: center; margin:auto; padding: 20px;">
            <h1 style="color: #333333; font-size: 24px; margin-bottom: 20px;">Welcome to Our Service, ${name}!</h1>
            <p style="color: #666666; font-size: 16px; margin-bottom: 10px;">To complete your registration, please verify your email address by clicking the button below:</p>
            <a href="${verificationLink}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px; display: inline-block;">Verify Your Email</a>
            <p style="color: #999999; font-size: 14px;">This link is valid for the next 30 minutes.</p>
            <p style="color: #999999; font-size: 14px;">If you did not initiate this request, please disregard this email.</p>
        </div>
    </div>
    `;
};
