

`SECURITY`

`Cross site scripting XSS`
    When attacker inject malious script into the webpage viewed by other user.
    types
        Refelected ->  url manipulation
        stored -> saved in server
        Dom based -> inject into the Dom
    `Mitigate`
        Input validation
        output encoding -> Encode user-generated content and dynamic data before rendering it in web pages
        HTTPOnly and Secure Flags -> Set the HTTPOnly flag on cookies to prevent client-side scripts from accessing them
        CSP (Content security policy)
            define a set of directives that instruct the browser which resources are allowed to be loaded and executed on a web page.
            Define CSP Directives: Determine the CSP directives that you want to enforce on your website
            Content-Security-Policy: 
                default-src 'self'; 
                script-src 'self' https://cdnjs.cloudflare.com; 
                style-src 'self' https://fonts.googleapis.com; 
                img-src 'self' data:; 
                font-src 'self' https://fonts.gstatic.com; 
                object-src 'none'; 
                frame-ancestors 'none'; 
                upgrade-insecure-requests;

`Iframe attack`
    clickjacking, XSS, Crosss origin communication(when i frame is loaded from a different point)

    `mitigate`
        Implement Frame Security Measures: Use the 'X-Frame-Options' header or Content Security Policy (CSP) to control how your web pages can be embedded in iframes. 
        Validate and Sanitize Iframe Content: Ensure that content displayed within iframes is validated and sanitized to prevent XSS attacks.
        Implement Clickjacking Protection: Employ techniques such as frame-busting JavaScript code or the 'X-Frame-Options' header with the 'SAMEORIGIN' directive to prevent clickjacking attacks 

`CSRF(Cross site request forgery)`
     a type of security vulnerability that allows an attacker to execute unauthorized actions on behalf of a user who is authenticated to a web application
     while a use is login to some secure website like bank, the attacker will trick the vitim to open some website via some pishing attack and through that the attacker will try to access authication infomartion from the user

     `Mitigate`
        CSRF token: Include a unique, unpredictable token with each state-changing request generated by the server. This token is also included in the user's session and validated upon submission.
        SameSite Cookies: Set the SameSite attribute for cookies to prevent them from being sent in cross-site requests. 
        Referrer Policy: Use the Referrer-Policy header to control the information included in the Referer header of outgoing requests.
        Content Security Policy (CSP): Implement CSP directives to restrict the sources from which scripts and resources can be loaded,

`Clickjacking`:

    Clickjacking involves embedding a malicious webpage or element transparently over a legitimate webpage to trick users into clicking on hidden buttons or links.
    `Mitigation`: 
        Implement X-Frame-Options header or Content Security Policy (CSP) to prevent your site from being loaded in iframes.

`Insecure Direct Object References (IDOR):`

    IDOR vulnerabilities occur when an attacker can access and manipulate sensitive data by directly referencing objects or resources in an application.
    `Mitigation`: 
        Implement proper access controls, enforce authorization checks on both client and server sides, and avoid exposing sensitive identifiers directly in URLs.




`WEB VITALS`
    Web Vitals are a set of metrics introduced by Google to measure and quantify user experience on the web.

    `Largest Contentful Paint (LCP):` 
        LCP measures the time it takes for the largest content element (such as an image or a block of text) to become visible within the viewport. It indicates how quickly users perceive the main content of a page loading. An LCP score of less than 2.5 seconds is considered good.

    `First Input Delay (FID):` 
        FID measures the time it takes for a webpage to respond to the first user interaction, such as clicking a button or tapping a link. It quantifies the responsiveness of the page and how quickly users can interact with it. An FID score of less than 100 milliseconds is considered good.

    `Cumulative Layout Shift (CLS): `
        CLS measures the amount of unexpected layout shifts that occur during page loading. It quantifies the visual stability of the page and how often users encounter unexpected changes in layout. A CLS score of less than 0.1 is considered good.



