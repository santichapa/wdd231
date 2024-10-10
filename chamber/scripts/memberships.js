const mDetails = document.querySelector("#membership-details")

bronzeDetails = `
    <h2>Bronze Membership</h2>
        <ul>
            <li><strong>Basic Listing:</strong> A business profile in the chamber’s online directory.</li>
            <li><strong>Access to Events:</strong> Invitation to networking events, workshops, and seminars.</li>
            <li><strong>Newsletter Subscription:</strong> Regular updates on chamber activities.</li>
            <li><strong>Member Discounts:</strong> Discounts on chamber-sponsored programs or services.</li>
        </ul>`;
silverDetails = `
    <h2>Silver Membership</h2>
        <ul>
            <li><strong>Enhanced Listing:</strong> Featured placement in the online directory.</li>
            <li><strong>Priority Event Registration:</strong> Early access to event registration.</li>
            <li><strong>Exclusive Workshops:</strong> Access to specialized workshops or industry-specific sessions.</li>
            <li><strong>Business Referrals:</strong> Referrals from the chamber to potential clients.</li>
            <li><strong>Social Media Shoutouts:</strong> Recognition on the chamber’s social media platforms.</li>
        </ul>`;
goldDetails = `
    <h2>Gold Membership</h2>
        <ul>
            <li><strong>Premium Listing:</strong> Prominent placement in the online directory.</li>
            <li><strong>VIP Events:</strong> Invitations to exclusive VIP events with key stakeholders.</li>
            <li><strong>Leadership Opportunities:</strong> Eligibility for board positions or committee leadership.</li>
            <li><strong>Sponsorship Opportunities:</strong> Priority consideration for sponsoring chamber events.</li>
            <li><strong>Customized Marketing:</strong> Tailored marketing support, such as featured articles or spotlights.</li>
        </ul>`;


function displayMembershipDetails(membership) {
    mDetails.innerHTML = '<button id="closeModal" class="close-btn">✕</button>' + membership;

    mDetails.showModal();
    closeModal.addEventListener("click", () => {
        mDetails.close();
    })
}

document.querySelector("#bronzeBtn").addEventListener("click", () => {
    displayMembershipDetails(bronzeDetails);
})
document.querySelector("#silverBtn").addEventListener("click", () => {
    displayMembershipDetails(silverDetails);
});
document.querySelector("#goldBtn").addEventListener("click", () => {
    displayMembershipDetails(goldDetails);
});