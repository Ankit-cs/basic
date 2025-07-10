# 📧 Email Setup Guide for Contact Form

## 🚀 Quick Setup Steps

### 1. Enable Gmail App Password
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click **Security** in the left sidebar
3. Under "How you sign in to Google", click **2-Step Verification**
4. **Enable 2-Step Verification** if not already enabled
5. Go back to Security, click **App passwords**
6. Select **Mail** and **Other (Custom name)**
7. Enter "Portfolio Contact Form" as the name
8. **Copy the generated 16-character password**

### 2. Update Environment Variables
1. Open `port/port/.env.local`
2. Replace `your_app_password_here` with the app password you copied
3. Save the file

### 3. Test the Contact Form
1. Run your development server: `npm run dev`
2. Go to the contact page
3. Fill out the form and click "Send Message"
4. Check your Gmail inbox for the message!

## 📋 Environment Variables Explained

```env
EMAIL_USER=ankitcareer018@gmail.com    # Your Gmail address
EMAIL_PASS=your_app_password_here       # Gmail App Password (16 characters)
EMAIL_TO=ankitcareer018@gmail.com       # Where to receive contact form emails
```

## 🎨 Email Template Features

- **Professional Design**: Clean HTML email template
- **Contact Details**: Name and email clearly displayed
- **Message Content**: Formatted message body
- **Portfolio Branding**: Uses your red-orange color scheme
- **Source Identification**: Notes it came from your portfolio

## 🔒 Security Notes

- ✅ App passwords are more secure than your main Gmail password
- ✅ .env.local is already in .gitignore (won't be committed to Git)
- ✅ Environment variables are only accessible server-side
- ✅ No sensitive data exposed to the client

## 🐛 Troubleshooting

**"Invalid login" error:**
- Make sure 2-Step Verification is enabled
- Use App Password, not your regular Gmail password
- Check that EMAIL_USER matches your Gmail address

**"Failed to send message" error:**
- Check your internet connection
- Verify the App Password is correct (16 characters, no spaces)
- Make sure all environment variables are set

## 📧 What Happens When Someone Contacts You

1. **User fills form** → Name, Email, Message
2. **Form submits** → Data sent to your API
3. **Email sent** → Professional email sent to your Gmail
4. **User feedback** → Success/error message shown
5. **You receive** → Formatted email with contact details

Your contact form is now fully functional! 🎉
