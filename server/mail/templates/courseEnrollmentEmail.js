exports.courseEnrollmentEmail = (courseName, name) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Course Registration Confirmation</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <a href="https://learnflow-v1.vercel.app/"><img class="logo" src="https://lh3.googleusercontent.com/fife/ALs6j_EFrhGgUM0TpzKa9e2GH0CYZJBUVNT4krkYQ6OLMcF1Ls3X4sEcxDVjMs6O7qeLHw4d-nR25TOvu2TjxdKK1YJWvZonhiSKV7_xfoKgchNZNN6H_vzREBg1DdrSR83xsVrwmcMDa45zki4Zg3JLn54YyAjkXa-syUIG1EkzxjuN3KP9Fc7r6tnlwqmcOWSkCErcZO9uoh2-xQULj1vN_naRxDjSWuFf-LQOhKVXVDOcXpAL4z4PVpZ_ECKOf3bL7zresk5mZYc-DzArWUE2z_H8cBAArTc8URNk43hr4vvQVtWGhBAveu9x0-Rx-1M_pqu7YJDkwoGv7IsqQHyLxaZYj30pzx_l7-oHzqqLuePpeO_zLFu2Mrj92oTSjAGk7fOlXT-U4lAiMvAaia4Q2O_EQ_MJ3GpGyzFW9ZqCK_Kxx43OQGKelY-TfzfmzhTRBP7jrFmSAg4PAo8Xsw4_j0JYLcxDV-uO1l0mbJdv17iSBV_fbCIUfX0jRi-O-Nu__dcuHA29RXYDbzO99egvyTaPy5a7y0po-5tA-WB1E3BnwVlbViNu_9gD2evX4hNDG8VROQmFn8_jyxV-S8MhDEg1setsAtRduqGiCwR-EKc2L8p4v_j6ygeiTnqHLGB_w3seslxqX8ljUhs8gq10rKw1ZxKcHKjUEoht6fEeg6Nl2eN9cWRzJ0Tzt5AAAcie5DSsDN0oaLW24l9xX34A-a9a0pnJNBdZ6F-XBidgsPZa4W5emX3KuoCqnfi6IEm_4-HPhBr--OLPVhg4FsnDraZi4oRM45BznWEVUsv6jV5HVDUkKR46U-uSIOK5V_swhHMNX0xwVK1F6WjTAZTsqD2ij9LyOdzulpu_fm2ni_3GObcZSZVfxjEKViahxzdJMsGHmKrDVdF-4f1eOXuVFWqbhzCRldCWG-BzDX3-FL1xOeho6tnX5raKSZnhhhsEQoX70NKzWNJORzotSoXz7PoGFwqv2ilRq9OYSHVEB4yVIFS0CEsSzS_PAhpYaEh4iDkpHD6rTyGX-tRZc-RrlZSvB0-CzcrETOcnTHsEvXy5DQhlmU_3f_Svlf2OqKGPAOakTlmhpFjmFGxlmVb3N16T7Cbty-FEqQm5FqwJejQVWGQBoFDsZeZLHOKGVnjtz9SHwWh-aRQl4rR_rBjmtmgDdHnRuI_X6S0yGWRUms7EEvpzeZjN5rY_S1SqCSIps4OmtzpjMIEyhRRntWqBmzBFkynMmTOCx9U200xtxKwZMPO2xsstxDplixe9Wn4V2H2xRCWNgYYqffsbf3g2GxnLZCnIOpCjprNCnVX2zgLFeuRKwlKykkAtxWFjc63o3uJmTR_jNs0-7kqAWWTUxPacpuBfMq779XKXS7_jrDvq-PSfpuPXZaQ7fapPSvTsFcKBvtyBKVvHa9x_915Kl-ajqqATkP0uhCyhIBK_9D5y0KYigG6kcUIBidzaC_vGuZvBLIIGxNJQt9AjDtUvk3YyHQeK6cmIQaD43rTZUfI6JRO6n90rPPlJzXjiFWFO5l8gUray1BcJPSjsWq0_9CR6PSeBnz0SqojxdnYLrlBWb_rtXPO9nyi_3wklFZgY6g4huDNZhBDftFn8Rw=w1920-h912"
                    alt="learnflow Logo"></a>
            <div class="message">Course Registration Confirmation</div>
            <div class="body">
                <p>Dear ${name},</p>
                <p>You have successfully registered for the course <span class="highlight">"${courseName}"</span>. We
                    are excited to have you as a participant!</p>
                <p>Please log in to your learning dashboard to access the course materials and start your learning journey.
                </p>
                <a class="cta" href="https://learnflow-v1.vercel.app/dashboard">Go to Dashboard</a>
            </div>
            <div class="support">If you have any questions or need assistance, please feel free to reach out to us at <a
                    href="mailto:info@learnflow.com">info@learnflow.com</a>. We are here to help!</div>
        </div>
    </body>
    
    </html>`;
  };
  