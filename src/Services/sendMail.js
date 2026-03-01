const transporter = require("../Config/nodeMailer.js");

async function registrationEmail({ to, name }) {
    try {
        await transporter.sendMail({
            from: `"Connect" <${process.env.SMTP_USER}>`,
            to: to,
            subject: "Welcome 🚀",
            html: welcomeTemplate(name.toUpperCase()),
        });

        console.log("Email sent successfully");
    } catch (error) {
        console.error("Email error:", error.message);
    }
}

const welcomeTemplate = (name) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body style="margin:0; padding:0; background-color:#f4f6f8; font-family: Arial, sans-serif;">
    
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:40px 0;">
          
          <table width="600" cellpadding="0" cellspacing="0" 
            style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 8px 24px rgba(0,0,0,0.08);">
            
            <!-- Header -->
            <tr>
              <td align="center" 
                style="background: linear-gradient(135deg, #4f46e5, #7c3aed); padding:40px 20px; color:#ffffff;">
                <h1 style="margin:0; font-size:28px;">Welcome to Connect!</h1>
              </td>
            </tr>
            
            <!-- Body -->
            <tr>
              <td style="padding:40px 30px; color:#333333;">
                
                <h2 style="margin-top:0;">Hey ${name} 👋</h2>
                
                <p style="font-size:16px; line-height:1.6;">
                  We're excited to have you onboard! Your account has been successfully created 
                  and you're now ready to explore everything we have built for you.
                </p>
                
                <p style="font-size:16px; line-height:1.6;">
                  Start building, connecting, and creating something awesome today.
                </p>
                
                <div style="text-align:center; margin:35px 0;">
                  <a href="#" 
                     style="background: linear-gradient(135deg, #4f46e5, #7c3aed);
                            color:#ffffff;
                            padding:14px 28px;
                            text-decoration:none;
                            border-radius:8px;
                            font-weight:bold;
                            display:inline-block;">
                    Get Started
                  </a>
                </div>
                
                <p style="font-size:14px; color:#777;">
                  If you have any questions, just reply to this email — we’re here to help.
                </p>
                
              </td>
            </tr>
            
            <!-- Footer -->
            <tr>
              <td align="center" 
                style="background:#f1f3f5; padding:20px; font-size:13px; color:#888;">
                © ${new Date().getFullYear()} YourApp. All rights reserved.
              </td>
            </tr>
          
          </table>
        
        </td>
      </tr>
    </table>
    
  </body>
  </html>
  `;
};






module.exports = registrationEmail ;

