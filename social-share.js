document.addEventListener("DOMContentLoaded", function() {
    const pageURL = encodeURIComponent(window.location.href);

    // Select all social links
    document.querySelectorAll(".social_link").forEach(button => {
        button.addEventListener("click", function() {
            if (button.classList.contains("is-x")) {
                // Share on Twitter (X)
                const tweetText = encodeURIComponent("Check this out!");
                const twitterURL = `https://twitter.com/intent/tweet?text=${tweetText}&url=${pageURL}`;
                window.open(twitterURL, "_blank");
            } 
            else if (button.classList.contains("is-linkedin")) {
                // Share on LinkedIn
                const linkedInURL = `https://www.linkedin.com/sharing/share-offsite/?url=${pageURL}`;
                window.open(linkedInURL, "_blank");
            } 
            else if (button.classList.contains("is-email")) {
                // Share via Email
                const subject = encodeURIComponent("Check this out!");
                const body = encodeURIComponent(`Hey,\n\nI found this interesting: ${window.location.href}`);
                const emailURL = `mailto:?subject=${subject}&body=${body}`;
                window.location.href = emailURL;
            }
        });
    });
});
