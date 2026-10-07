const ARTICLES = [
  {
    id: "respond-dispute",
    title: "How to respond to a dispute in your dashboard",
    path: "Support / Disputes / Respond",
    topic: "Disputes",
    updated: "May 2026",
    snippet:
      "Gather shipping confirmation, proof of delivery, and customer communication before you submit evidence in Payments → Disputes.",
    paragraphs: [
      "A dispute opens when a cardholder questions a charge with their bank. You usually have a short window to send evidence before the case is decided for the customer.",
      "Start in Payments → Disputes and open the case marked Needs response. The deadline shown there is the one that matters — bank mail dates can differ."
    ],
    steps: [
      "Download the dispute notice and note the reason code.",
      "Collect proof of delivery, a refund receipt if you already returned funds, and the customer thread.",
      "Upload files under Submit evidence. Stick to the checklist for that reason code.",
      "Send the response. You will get a confirmation email with the case id."
    ],
    tags: ["dispute", "chargeback", "evidence", "respond", "dashboard"]
  },
  {
    id: "evidence-deadline",
    title: "Dispute evidence deadlines and what to include",
    path: "Support / Disputes / Evidence",
    topic: "Disputes",
    updated: "April 2026",
    snippet:
      "Most card networks expect a response within 7 to 21 days. Late files are not reviewed, even if the charge was valid.",
    paragraphs: [
      "Deadlines depend on the network and the reason code. The date in your dashboard already includes our processing buffer, so treat it as final.",
      "Evidence should match the reason. A shipping dispute needs a carrier scan. A “product not as described” dispute needs the listing, photos, and the refund policy the customer accepted."
    ],
    steps: [
      "Open the dispute and read the reason code before you gather files.",
      "Name files clearly, such as tracking-1Z.pdf, and keep each under 5 MB.",
      "Submit once. A second upload replaces the packet only if the deadline has not passed."
    ],
    tags: ["dispute", "evidence", "deadline", "chargeback"]
  },
  {
    id: "payout-hold",
    title: "Why a payout is on hold",
    path: "Support / Payouts / Holds",
    topic: "Payouts",
    updated: "May 2026",
    snippet:
      "Payouts pause for incomplete verification, a sudden dispute spike, or unusual volume. Clear every red-flagged field in Account details.",
    paragraphs: [
      "A hold does not cancel the balance. Funds stay in your account until the review finishes or you supply the missing detail.",
      "The banner on Home names the reason. If several flags are listed, resolve them from top to bottom — later checks often depend on the first one."
    ],
    steps: [
      "Open Account details and expand every field marked in red.",
      "Upload a document that matches the legal name on the account.",
      "If the hold cites dispute volume, respond to open disputes before requesting a review.",
      "Use Request review when the checklist is clear. Most reviews finish within two business days."
    ],
    tags: ["payout", "hold", "verification", "reserve", "balance"]
  },
  {
    id: "failed-payout",
    title: "A payout failed or was returned",
    path: "Support / Payouts / Failures",
    topic: "Payouts",
    updated: "March 2026",
    snippet:
      "Banks return payouts when the account number, routing number, or account name does not match. Update the destination and retry.",
    paragraphs: [
      "Returned payouts reappear in your balance the same day we receive the bank notice. The original payout row stays marked Returned.",
      "Fix the bank account under Settings → Bank accounts, then choose Retry on the returned payout. Do not create a second destination for the same account."
    ],
    steps: [
      "Compare the account name with the legal entity on the Northline account.",
      "Re-enter the routing and account numbers from a voided check or bank letter.",
      "Retry the payout after the new account shows Verified."
    ],
    tags: ["payout", "failed", "returned", "bank", "routing"]
  },
  {
    id: "verify-account",
    title: "Complete account verification",
    path: "Support / Account / Verification",
    topic: "Verification",
    updated: "June 2026",
    snippet:
      "Verification asks for a government id and a document that ties the business to its address. Blurry photos and mismatched names are the usual reasons a check fails.",
    paragraphs: [
      "We verify the person who owns the account and the business that receives payouts. Both need to match what you entered at signup.",
      "Use a color photo of the full document. Cropping out the corners or covering the name with a finger will fail the check."
    ],
    steps: [
      "Open Account → Verification.",
      "Upload a passport, driver’s license, or national id for each owner over 25% .",
      "Add a proof of address dated within 90 days: a bank statement or utility bill.",
      "Submit and wait for the status to move from In review to Verified."
    ],
    tags: ["verification", "kyc", "identity", "document", "upload"]
  },
  {
    id: "upload-documents",
    title: "Where to upload verification documents",
    path: "Support / Account / Documents",
    topic: "Verification",
    updated: "February 2026",
    snippet:
      "Documents go in Account → Verification, not in a support reply. Files sent by email are not attached to the review.",
    paragraphs: [
      "Each requirement has its own upload slot. Putting a passport in the address slot, or the reverse, restarts that check.",
      "Accepted types are PDF, JPG, and PNG. Password-protected files cannot be opened by the review team."
    ],
    steps: [
      "Sign in as the account owner. Staff roles can view status but cannot upload.",
      "Use the slot named on the requirement, then select Submit documents.",
      "If a file is rejected, read the note under the slot before uploading a new one."
    ],
    tags: ["upload", "document", "verification", "identity"]
  },
  {
    id: "issue-refund",
    title: "Refund a customer payment",
    path: "Support / Payments / Refunds",
    topic: "Refunds",
    updated: "May 2026",
    snippet:
      "Full and partial refunds start from the payment page. Card refunds typically settle back to the customer in 5 to 10 business days.",
    paragraphs: [
      "Refunds draw from your available balance. If the balance is short, the refund stays queued until the next successful charge covers it.",
      "Refunding a disputed charge does not close the dispute. Respond in Disputes as well, and include the refund receipt as evidence."
    ],
    steps: [
      "Open Payments and select the charge.",
      "Choose Refund, then Full or a partial amount.",
      "Add an internal note your team can see later.",
      "Confirm. The customer sees the credit on their card statement, not as a new deposit from you."
    ],
    tags: ["refund", "payment", "partial", "charge"]
  },
  {
    id: "two-factor",
    title: "Set up two-factor authentication",
    path: "Support / Security / 2FA",
    topic: "Security",
    updated: "January 2026",
    snippet:
      "An authenticator app is required for owners. SMS is a backup only, and it cannot be the only factor on an account that pays out.",
    paragraphs: [
      "Turn on two-factor from Settings → Security. Recovery codes are shown once — store them somewhere other than your email inbox.",
      "If you lose the device, an owner can approve a reset from a previously trusted browser, or support can reset it after we verify the business."
    ],
    steps: [
      "Install an authenticator app before you start.",
      "Scan the QR code and enter the six-digit code.",
      "Download the recovery codes and confirm you stored them.",
      "Sign out and back in to confirm the prompt appears."
    ],
    tags: ["security", "2fa", "authentication", "login"]
  },
  {
    id: "reason-codes",
    title: "Dispute reason codes and the evidence that fits",
    path: "Support / Disputes / Reason codes",
    topic: "Disputes",
    updated: "June 2026",
    snippet:
      "Each reason code asks for a different packet. A shipping code needs a carrier scan. A not-as-described code needs the listing and the policy the customer accepted.",
    paragraphs: [
      "The reason code is printed on the dispute and in the dashboard. Sending a generic “we shipped it” letter for every code is the usual reason a valid charge is lost.",
      "If the code is unfamiliar, open the checklist on the dispute before you upload. The checklist is the same list the reviewer uses."
    ],
    steps: [
      "Read the reason code on the dispute, not the customer’s email subject.",
      "Match each file to one line of the checklist.",
      "Leave out internal notes and other customers’ data."
    ],
    tags: ["dispute", "reason", "code", "evidence", "chargeback"]
  },
  {
    id: "dispute-outcome",
    title: "What happens after a dispute is won or lost",
    path: "Support / Disputes / Outcomes",
    topic: "Disputes",
    updated: "March 2026",
    snippet:
      "A win returns the charge to your balance after the network releases it. A loss keeps the debit, and the dispute fee is not refunded.",
    paragraphs: [
      "Networks decide. We post the outcome on the dispute as soon as they send it, which can be weeks after you submitted evidence.",
      "A won dispute can still be reversed if the cardholder’s bank files a second presentment. You’ll see a new row rather than an edit to the old one."
    ],
    steps: [
      "Watch the dispute status, not the payout calendar.",
      "If you lost and you already refunded, open a case with both ids.",
      "Do not issue a second refund for the same charge."
    ],
    tags: ["dispute", "won", "lost", "fee", "outcome"]
  },
  {
    id: "payout-schedule",
    title: "When payouts are sent",
    path: "Support / Payouts / Schedule",
    topic: "Payouts",
    updated: "April 2026",
    snippet:
      "The default schedule pays out each business day for charges that have cleared. Weekends and bank holidays shift the deposit, not the balance.",
    paragraphs: [
      "A charge can be successful and still be ineligible for today’s payout if it has not cleared. The payout preview lists what is included.",
      "Changing the schedule from daily to weekly takes effect on the next cutoff, not on a payout already in transit."
    ],
    steps: [
      "Open Payouts → Schedule and note the cutoff time in your timezone.",
      "Compare the preview with the balance on Home.",
      "Save a schedule change before the cutoff if you want it to apply tomorrow."
    ],
    tags: ["payout", "schedule", "daily", "deposit", "cutoff"]
  },
  {
    id: "update-bank",
    title: "Update the bank account on file",
    path: "Support / Payouts / Bank account",
    topic: "Payouts",
    updated: "May 2026",
    snippet:
      "A new bank account has to be verified before it can receive a payout. The previous account keeps receiving funds until the new one shows Verified.",
    paragraphs: [
      "Account name, routing number, and account number are checked against the legal entity. A personal account cannot receive payouts for a company.",
      "Verification is a small deposit or an instant check, depending on the bank. Don’t retry a payout to an account that still says Pending."
    ],
    steps: [
      "Open Settings → Bank accounts and add the new destination.",
      "Wait until the status is Verified.",
      "Set it as the payout account, then retry any returned payouts."
    ],
    tags: ["payout", "bank", "account", "routing", "verified"]
  },
  {
    id: "verification-rejected",
    title: "Verification was rejected",
    path: "Support / Account / Rejected",
    topic: "Verification",
    updated: "June 2026",
    snippet:
      "A rejection names the slot that failed. Upload a new file there — resubmitting the same photo will fail again for the same reason.",
    paragraphs: [
      "The note under the slot is the reviewer’s reason: blur, cropped corners, a name that doesn’t match, or a document older than 90 days.",
      "Payouts stay paused until every rejected slot is cleared. Approving one document does not release a hold by itself."
    ],
    steps: [
      "Open Account → Verification and read the note on the red slot.",
      "Photograph the full document in even light, with all four corners visible.",
      "Submit only that slot, then wait for In review to clear."
    ],
    tags: ["verification", "rejected", "document", "hold", "upload"]
  },
  {
    id: "add-owner",
    title: "Add or remove a business owner",
    path: "Support / Account / Owners",
    topic: "Verification",
    updated: "January 2026",
    snippet:
      "Anyone who owns 25% or more needs an identity check. Adding an owner pauses payouts until that person’s documents are verified.",
    paragraphs: [
      "Ownership is whatever is on the formation documents, not the person who logs in most often.",
      "Removing an owner does not delete their past verification. It stops them from being required on the next review."
    ],
    steps: [
      "Open Account → Business and edit Owners.",
      "Enter the legal name exactly as it appears on the government id.",
      "Upload that person’s id in the new slot before you request a review."
    ],
    tags: ["verification", "owner", "beneficial", "identity", "business"]
  },
  {
    id: "partial-refund",
    title: "Partial refunds and what the customer sees",
    path: "Support / Payments / Partial refunds",
    topic: "Refunds",
    updated: "April 2026",
    snippet:
      "A partial refund shows as a credit for that amount on the customer’s card statement. It does not change the original charge row to the new total.",
    paragraphs: [
      "You can refund up to the original amount, across more than one partial refund. The payment page shows what is still refundable.",
      "The statement descriptor stays the same as the original charge. Customers sometimes miss the credit because they look for a new merchant name."
    ],
    steps: [
      "Open the payment and choose Refund.",
      "Enter the partial amount and an internal note.",
      "Tell the customer the credit uses the original descriptor and can take 5 to 10 business days."
    ],
    tags: ["refund", "partial", "statement", "descriptor", "payment"]
  },
  {
    id: "refund-balance",
    title: "A refund is waiting on your balance",
    path: "Support / Payments / Refund balance",
    topic: "Refunds",
    updated: "February 2026",
    snippet:
      "Refunds are paid from your available balance. If the balance is short, the refund stays queued until a new charge covers it.",
    paragraphs: [
      "A queued refund is not sent to the card network yet. The customer will not see a credit until the queue clears.",
      "You can cancel a queued refund from the payment page. Once it is submitted to the network, it cannot be recalled."
    ],
    steps: [
      "Open the payment and check the refund status.",
      "If it says Queued, wait for the next successful charge or add funds if your account allows it.",
      "Cancel the refund only if you do not want it to send."
    ],
    tags: ["refund", "balance", "queued", "failed", "payment"]
  },
  {
    id: "lost-device",
    title: "Reset two-factor after a lost device",
    path: "Support / Security / Lost device",
    topic: "Security",
    updated: "March 2026",
    snippet:
      "An owner can approve a reset from a previously trusted browser. Otherwise support resets two-factor after the business is verified.",
    paragraphs: [
      "SMS backup codes cannot replace an authenticator on an account that pays out. You will set up a new app at the end of the reset.",
      "A reset signs every session out, including staff who were signed in on shared computers."
    ],
    steps: [
      "From a trusted browser, open Settings → Security → Lost device.",
      "Approve the prompt, or start a case if you have no trusted browser left.",
      "Scan a new QR code and store the new recovery codes."
    ],
    tags: ["security", "2fa", "lost", "device", "reset", "authenticator"]
  },
  {
    id: "recovery-codes",
    title: "Recovery codes and trusted browsers",
    path: "Support / Security / Recovery",
    topic: "Security",
    updated: "May 2026",
    snippet:
      "Recovery codes are shown once, when two-factor is turned on. Each code works a single time and then the list needs to be regenerated.",
    paragraphs: [
      "Store the codes outside your email. If the inbox and the phone are both unavailable, the codes are the way back in.",
      "A trusted browser can approve a reset for 30 days after you marked it trusted. Clearing cookies removes that trust."
    ],
    steps: [
      "Open Settings → Security and choose Generate new recovery codes.",
      "This invalidates every older code.",
      "Download the new list before you close the dialog."
    ],
    tags: ["security", "recovery", "codes", "browser", "trusted"]
  },
  {
    id: "inquiry-vs-dispute",
    title: "An inquiry is not a chargeback yet",
    path: "Support / Disputes / Inquiries",
    topic: "Disputes",
    updated: "June 2026",
    snippet:
      "An inquiry asks for information and does not debit you. Answer it anyway — an ignored inquiry often becomes a chargeback.",
    paragraphs: [
      "The dashboard labels inquiries separately from disputes that need evidence. The deadline is shorter because the bank is still deciding whether to file.",
      "A clear reply with the receipt and the delivery scan is usually enough to stop the inquiry."
    ],
    steps: [
      "Open the inquiry and read what the bank asked.",
      "Attach the receipt and any delivery proof.",
      "Send the reply before the date on the inquiry, not the later dispute date."
    ],
    tags: ["dispute", "inquiry", "chargeback", "retrieval"]
  },
  {
    id: "duplicate-charge",
    title: "Duplicate charges",
    path: "Support / Disputes / Duplicates",
    topic: "Disputes",
    updated: "April 2026",
    snippet:
      "Two lines on your statement are not always two payments. This page explains when you were actually charged twice, and what a refund changes.",
    paragraphs: [
      "A payment that failed and was tried again can look like two charges. Only successful payments count.",
      "A refund returns one of those payments. It does not close a question you already opened with your bank."
    ],
    steps: [
      "Check whether both charges say they went through.",
      "Look for a refund of the extra charge on your statement.",
      "If you also contacted your bank, that review is separate from the refund."
    ],
    tags: ["dispute", "duplicate", "charge", "charged", "twice", "refund"]
  },
  {
    id: "dispute-fee",
    title: "Where the dispute fee shows up",
    path: "Support / Disputes / Fees",
    topic: "Disputes",
    updated: "January 2026",
    snippet:
      "The dispute fee posts when the case opens, not when it is decided. A win does not return the fee.",
    paragraphs: [
      "You will see the fee on the dispute and again in the balance activity for that day.",
      "Refunding the customer does not remove the fee. The fee is charged by the card network for opening the case."
    ],
    steps: [
      "Open the dispute and check the fee line.",
      "Match it to Balance → Activity on the same date.",
      "Do not file a separate case only to ask for the fee back."
    ],
    tags: ["dispute", "fee", "balance", "chargeback"]
  },
  {
    id: "instant-payout",
    title: "Instant payouts and the daily limit",
    path: "Support / Payouts / Instant",
    topic: "Payouts",
    updated: "May 2026",
    snippet:
      "Instant payouts send to a debit card in minutes, up to the limit shown on the payout page. The fee is taken from the amount you send.",
    paragraphs: [
      "The limit resets each business day. A standard payout already in transit still counts against the available balance.",
      "If the debit card is expired, the instant payout fails and the funds return to the balance."
    ],
    steps: [
      "Open Payouts and choose Instant.",
      "Enter an amount at or under the remaining limit.",
      "Confirm the debit card before you send."
    ],
    tags: ["payout", "instant", "debit", "limit", "fee"]
  },
  {
    id: "negative-balance",
    title: "Your balance went negative",
    path: "Support / Payouts / Negative balance",
    topic: "Payouts",
    updated: "March 2026",
    snippet:
      "Refunds, disputes, and fees can pull the balance below zero. Payouts stay off until new charges bring it back.",
    paragraphs: [
      "We do not draft your bank account for a negative balance unless your agreement says so.",
      "The Home banner shows the amount owed. New successful charges apply to it automatically."
    ],
    steps: [
      "Open Balance and read the activity that caused the debit.",
      "Cover it with new charges, or add funds if that option is on your account.",
      "Payouts resume on the next schedule after the balance is positive."
    ],
    tags: ["payout", "balance", "negative", "reserve"]
  },
  {
    id: "payout-statement",
    title: "Match a payout to the bank deposit",
    path: "Support / Payouts / Statements",
    topic: "Payouts",
    updated: "February 2026",
    snippet:
      "The deposit descriptor is Northline plus the payout id. The bank date can be one business day after the payout date in the dashboard.",
    paragraphs: [
      "One payout can include many charges, refunds, and fees. Download the payout report if the deposit total does not match a single charge.",
      "A returned payout disappears from the bank statement and reappears in your balance."
    ],
    steps: [
      "Copy the payout id from Payouts.",
      "Find that id on the bank line.",
      "Open the payout report for the charge-level breakdown."
    ],
    tags: ["payout", "statement", "deposit", "bank", "report"]
  },
  {
    id: "proof-of-address",
    title: "What counts as proof of address",
    path: "Support / Account / Address",
    topic: "Verification",
    updated: "April 2026",
    snippet:
      "Use a bank statement or utility bill dated within 90 days. The name and address must match the business, and the full page has to be visible.",
    paragraphs: [
      "Screenshots of a maps app, lease excerpts, and mail forwarding slips are rejected.",
      "If the statement is for the owner’s home and the business is a company, use a document in the company’s name instead."
    ],
    steps: [
      "Download the PDF from the bank or utility. Do not photograph a screen.",
      "Check the date and that all four corners are in the file.",
      "Upload it in the address slot, not the identity slot."
    ],
    tags: ["verification", "address", "document", "utility", "statement"]
  },
  {
    id: "dba-name",
    title: "The statement name does not match the legal name",
    path: "Support / Account / Business name",
    topic: "Verification",
    updated: "June 2026",
    snippet:
      "Customers can see a doing-business-as name. Verification still uses the legal name on the formation documents.",
    paragraphs: [
      "A mismatch between the legal name and the bank account is the usual reason a payout destination fails.",
      "You can set a customer-facing name under Public details without changing the legal name."
    ],
    steps: [
      "Open Account → Business and compare the legal name with the bank letter.",
      "Update the legal name only if the formation documents changed.",
      "Put the storefront name in Public details."
    ],
    tags: ["verification", "name", "dba", "business", "statement"]
  },
  {
    id: "verification-pending",
    title: "Verification has been in review for days",
    path: "Support / Account / In review",
    topic: "Verification",
    updated: "May 2026",
    snippet:
      "Most reviews finish within two business days. A case does not speed up a review that is still inside that window.",
    paragraphs: [
      "Status stays In review while a person checks the files. Refreshing the page does not move it.",
      "If it is still In review after two business days, open a case and include the requirement name, not a new copy of the file."
    ],
    steps: [
      "Check the timestamp under the slot.",
      "Wait through two business days before writing in.",
      "If you were rejected, follow the note instead of waiting."
    ],
    tags: ["verification", "review", "pending", "status"]
  },
  {
    id: "refund-window",
    title: "How long you can still refund a payment",
    path: "Support / Payments / Refund window",
    topic: "Refunds",
    updated: "March 2026",
    snippet:
      "Card payments can be refunded for 180 days. After that the Refund button is gone and the customer has to be paid another way.",
    paragraphs: [
      "The window starts on the original charge date, not the date the service was delivered.",
      "A partial refund does not restart the 180 days."
    ],
    steps: [
      "Open the payment and look for Refund.",
      "If the button is missing, the window has closed.",
      "Do not create a new charge just to send the money back."
    ],
    tags: ["refund", "window", "180", "payment"]
  },
  {
    id: "refund-not-received",
    title: "The customer cannot find the refund",
    path: "Support / Payments / Missing refund",
    topic: "Refunds",
    updated: "January 2026",
    snippet:
      "A submitted refund can take 5 to 10 business days to show on the card. It uses the original statement descriptor, not a new one.",
    paragraphs: [
      "Ask the customer to search the original descriptor and the refund amount, not your store name if those differ.",
      "If the payment page still says Pending, the refund has not reached the network yet."
    ],
    steps: [
      "Open the payment and read the refund status.",
      "If it says Succeeded, give the customer the date, amount, and descriptor.",
      "Open a case only if Succeeded is older than 10 business days."
    ],
    tags: ["refund", "customer", "statement", "missing", "descriptor"]
  },
  {
    id: "refund-and-dispute",
    title: "Refund a payment that already has a dispute",
    path: "Support / Payments / Refund during a dispute",
    topic: "Refunds",
    updated: "June 2026",
    snippet:
      "Refunding the extra charge does not answer a dispute on the other one. If a customer says they were charged twice, you still respond under Disputes and put the refund receipt in the packet.",
    paragraphs: [
      "The bank does not see the refund unless you include it. Without that receipt they can still decide for the cardholder.",
      "Refunding the full amount does not withdraw the dispute."
    ],
    steps: [
      "Refund the payment from the payment page.",
      "Download the receipt.",
      "Upload it on the dispute before the deadline."
    ],
    tags: ["refund", "dispute", "evidence", "receipt"]
  },
  {
    id: "staff-roles",
    title: "Which roles can issue refunds and payouts",
    path: "Support / Security / Roles",
    topic: "Security",
    updated: "April 2026",
    snippet:
      "Owners and admins can refund and change the bank account. Analysts can view payments and cannot move money.",
    paragraphs: [
      "Invite people from Settings → Team. A role change applies the next time they load the dashboard.",
      "Removing someone signs them out. It does not delete payments they already created."
    ],
    steps: [
      "Open Settings → Team.",
      "Set the role before you send the invite.",
      "Turn off a person who has left instead of sharing their login."
    ],
    tags: ["security", "role", "admin", "team", "refund"]
  },
  {
    id: "suspicious-login",
    title: "You got a sign-in alert you do not recognize",
    path: "Support / Security / Alerts",
    topic: "Security",
    updated: "February 2026",
    snippet:
      "The alert email names the browser and the city. If that was not you, sign out of every session and rotate the password.",
    paragraphs: [
      "A new city can be a VPN or a phone on a different network. Check the time before you reset everything.",
      "If money moved, open a case with the payout id after you secure the login."
    ],
    steps: [
      "From a device you trust, open Settings → Security → Sessions.",
      "Sign out of the session you do not recognize.",
      "Change the password and confirm two-factor is still on."
    ],
    tags: ["security", "login", "alert", "session", "password"]
  },
  {
    id: "sign-out-everywhere",
    title: "Sign out of every device",
    path: "Support / Security / Sessions",
    topic: "Security",
    updated: "May 2026",
    snippet:
      "Sign out of all sessions from Settings → Security. You stay signed in on the browser you used to click it.",
    paragraphs: [
      "This does not turn off two-factor or change the password.",
      "Staff sessions end too if you are an owner. They will need to sign in again."
    ],
    steps: [
      "Open Settings → Security → Sessions.",
      "Choose Sign out of all other sessions.",
      "Ask anyone who shares the account to confirm they can still get in with their own login."
    ],
    tags: ["security", "session", "sign out", "device"]
  }
];

const SUGGESTIONS = [
  { q: "a customer says I charged them twice", hint: "Order 1044" },
  { q: "payout on hold", hint: "Friday’s payout" },
  { q: "dispute reason code", hint: "Disputes" },
  { q: "refund a payment", hint: "Payments" },
  { q: "upload documents", hint: "Verification" }
];

const TOPICS = ["All", "Disputes", "Payouts", "Verification", "Refunds", "Security"];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (ch) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]
  ));
}

function escapeReg(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlight(text, query) {
  const safe = escapeHtml(text);
  const words = query.trim().split(/\s+/).filter((word) => word.length > 1);
  if (!words.length) return safe;
  const re = new RegExp(`\\b(${words.map(escapeReg).join("|")})\\b`, "ig");
  return safe.replace(re, "<mark>$1</mark>");
}

const STOP_WORDS = new Set([
  "a", "an", "the", "to", "do", "i", "me", "my", "how", "what", "where", "when",
  "why", "long", "have", "need", "this", "is", "of", "for", "and", "or", "in", "on"
]);

function searchArticles(query, topic) {
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.replace(/[^a-z0-9]+/g, ""))
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word));
  return ARTICLES.filter((article) => {
    if (topic && topic !== "All" && article.topic !== topic) return false;
    if (!terms.length) return true;
    const haystack = [article.title, article.snippet, article.topic, article.tags.join(" ")]
      .join(" ")
      .toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}

const TOPIC_SUMMARIES = {
  Disputes:
    "Most disputes are decided on the packet you send before the dashboard deadline. Include <mark>proof of delivery, customer messages, and any refund receipt</mark> that matches the reason code.",
  Payouts:
    "Payout holds are usually caused by <mark>incomplete verification, a dispute spike, or unusual volume</mark>. A returned payout means the bank rejected the account on file — fix that destination before you retry.",
  Verification:
    "Verification finishes faster when the <mark>legal name, owner id, and proof of address</mark> all match. Upload files in Account → Verification — a file on a support case is not added to the review.",
  Refunds:
    "Refunds start on the payment itself and usually show on the card in <mark>5 to 10 business days</mark>. A refund does not close an open dispute on that same charge.",
  Security:
    "Owners need an authenticator app. If that device is gone, a reset needs <mark>a previously trusted browser or a manual review</mark>. Recovery codes each work once."
};

function summaryFor(query, topic, results) {
  const active = topic && topic !== "All" ? topic : "";
  const q = query.toLowerCase();
  if (!results.length) {
    const scope = active ? ` in ${active}` : "";
    return `Nothing${scope} matches that wording. Try a shorter phrase, or pick another topic. You can also submit a case and a specialist will pick it up.`;
  }
  if (active && TOPIC_SUMMARIES[active]) {
    const count = `${results.length} ${escapeHtml(active)} article${results.length === 1 ? "" : "s"}`;
    if (query.trim()) {
      return `${TOPIC_SUMMARIES[active]} These <mark>${count}</mark> match “${escapeHtml(query.trim())}”.`;
    }
    return `${TOPIC_SUMMARIES[active]} Showing <mark>${count}</mark>.`;
  }
  if (/twice|charged twice|duplicate/.test(q)) {
    return "This is two records. <mark>py_1044</mark> is the extra $86. <mark>dp_3k19</mark> is already open on the other charge, and the reason says the order never arrived. Refund only the extra one, then answer the dispute in the dashboard. Friday’s payout stays held until you do.";
  }
  if (/hold|payout|reserve/.test(q)) return TOPIC_SUMMARIES.Payouts;
  if (/verif|document|upload|identity|kyc/.test(q)) return TOPIC_SUMMARIES.Verification;
  if (/refund/.test(q)) return TOPIC_SUMMARIES.Refunds;
  if (/dispute|chargeback|evidence/.test(q)) return TOPIC_SUMMARIES.Disputes;
  if (/2fa|authenticator|security|recovery|login/.test(q)) return TOPIC_SUMMARIES.Security;
  const top = results[0];
  return `The closest match is <mark>${escapeHtml(top.title)}</mark>. ${escapeHtml(top.snippet)}`;
}

function searchUrl(query, topic) {
  const params = new URLSearchParams();
  if (query && query.trim()) params.set("q", query.trim());
  if (topic && topic !== "All") params.set("topic", topic);
  const qs = params.toString();
  return `search.html${qs ? `?${qs}` : ""}`;
}

function goToSearch(query, topic) {
  window.location.href = searchUrl(query, topic);
}

function initSearchForms() {
  document.querySelectorAll("[data-search-form]").forEach((form) => {
    const input = form.querySelector("input[name='q']");
    const suggest = form.querySelector("[data-suggest]");
    if (!input) return;

    const open = () => form.classList.add("is-open");
    const close = () => form.classList.remove("is-open");

    input.addEventListener("focus", open);
    input.addEventListener("input", open);
    input.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        close();
        input.blur();
      }
    });

    form.addEventListener("focusout", (event) => {
      if (!form.contains(event.relatedTarget)) close();
    });

    if (suggest) {
      suggest.innerHTML = SUGGESTIONS.map(
        (item) =>
          `<button type="button" data-q="${escapeHtml(item.q)}">${escapeHtml(item.q)}<span>${escapeHtml(item.hint)}</span></button>`
      ).join("");
      suggest.addEventListener("click", (event) => {
        const button = event.target.closest("button[data-q]");
        if (!button) return;
        input.value = button.dataset.q;
        goToSearch(input.value);
      });
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      goToSearch(input.value);
    });
  });

  document.querySelectorAll("[data-query]").forEach((node) => {
    node.addEventListener("click", () => goToSearch(node.dataset.query, node.dataset.topic));
  });
}

function renderArticle(article, backHref) {
  const view = document.getElementById("article-view");
  const list = document.getElementById("results-view");
  if (!view || !list) return;
  list.hidden = true;
  view.hidden = false;
  document.title = `${article.title} — Northline Help`;

  view.innerHTML = `
    <article class="article">
      <a class="back-link" href="${escapeHtml(backHref)}">← Back to results</a>
      <p class="article-kicker">${escapeHtml(article.path)} · Updated ${escapeHtml(article.updated)}</p>
      <h1>${escapeHtml(article.title)}</h1>
      <div class="article-body">
        ${article.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
        <ol class="article-steps">
          ${article.steps
            .map((step, index) => `<li><span class="step-num">${index + 1}</span><span>${escapeHtml(step)}</span></li>`)
            .join("")}
        </ol>
        <p>Still stuck after these steps? <a href="submit.html" style="color: var(--brand-navy-deep); font-weight: 600;">Submit a case</a> and include the payment or dispute id.</p>
      </div>
    </article>
  `;
}

function renderResults(query, topic) {
  const title = document.getElementById("results-title");
  const meta = document.getElementById("results-meta");
  const aiText = document.getElementById("ai-text");
  const aiMeta = document.getElementById("ai-meta");
  const list = document.getElementById("result-list");
  const filters = document.getElementById("topic-filters");
  if (!list) return;

  const results = searchArticles(query, topic);
  const shownQuery = query || "all articles";
  if (title) {
    title.textContent = query ? `Results for “${query}”` : "Browse help articles";
  }
  if (meta) {
    const topicNote = topic && topic !== "All" ? ` in ${topic}` : "";
    meta.textContent = `${results.length} article${results.length === 1 ? "" : "s"}${topicNote} for ${shownQuery}`;
  }
  if (aiText) aiText.innerHTML = summaryFor(query, topic, results);
  if (aiMeta) {
    const scope = topic && topic !== "All" ? `${topic} ` : "";
    aiMeta.textContent = results.length
      ? `Based on ${results.length} ${scope}article${results.length === 1 ? "" : "s"} · Updated 2026`
      : "No matching articles";
  }
  if (typeof window.__summarizeSearch === "function") {
    window.__summarizeSearch(query, topic, results);
  }

  if (filters) {
    filters.innerHTML = TOPICS.map((name) => {
      const pressed = (topic || "All") === name;
      return `<button type="button" class="chip-subtle" aria-pressed="${pressed}" data-topic-filter="${escapeHtml(name)}">${escapeHtml(name)}</button>`;
    }).join("");
    filters.querySelectorAll("[data-topic-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        const next = button.dataset.topicFilter;
        if ((topic || "All") === next) return;
        const url = searchUrl(query, next);
        history.pushState({ q: query, topic: next }, "", url);
        renderResults(query, next);
      });
    });
  }

  if (!results.length) {
    list.innerHTML = `
      <div class="empty">
        <h2>No articles for that search</h2>
        <p>Try “dispute”, “payout”, or “verification”, or send the details to support.</p>
        <a class="btn-primary" href="submit.html">Submit a case</a>
      </div>`;
    return;
  }

  list.innerHTML = results
    .map((article) => {
      const href = `article.html?id=${encodeURIComponent(article.id)}`;
      return `
        <a class="result" data-id="${escapeHtml(article.id)}" href="${href}">
          <p class="result__path">${escapeHtml(article.path)}</p>
          <h2 class="result__title">${escapeHtml(article.title)}</h2>
          <p class="result__snip">${highlight(article.snippet, query)}</p>
        </a>`;
    })
    .join("");
}

function initSearchPage() {
  if (!document.body.dataset.page || document.body.dataset.page !== "search") return;
  mountSearchSummary();
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q") || "";
  const topic = params.get("topic") || "All";
  const articleId = params.get("a");
  const input = document.querySelector("[data-search-form] input[name='q']");
  if (input) input.value = query;
  const searchBtn = document.getElementById("results-search-btn");
  const searchForm = document.getElementById("results-search");
  const setSearchOpen = (open) => {
    if (!searchForm || !searchBtn) return;
    searchForm.hidden = !open;
    searchBtn.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) input?.focus();
  };
  searchBtn?.addEventListener("click", () => setSearchOpen(searchForm.hidden));
  searchForm?.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setSearchOpen(false);
  });

  const follow = document.getElementById("followup");
  if (follow) {
    follow.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = follow.querySelector("input").value;
      if (value.trim()) goToSearch(value);
    });
  }
  document.querySelectorAll("[data-followup]").forEach((chip) => {
    chip.addEventListener("click", () => goToSearch(chip.dataset.followup));
  });

  const helpful = document.getElementById("helpful-note");
  document.querySelectorAll("[data-helpful]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-helpful]").forEach((other) => other.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      if (helpful) helpful.textContent = "Thanks — we logged that.";
    });
  });

  window.addEventListener("popstate", () => {
    const next = new URLSearchParams(window.location.search);
    const nextQuery = next.get("q") || "";
    const nextTopic = next.get("topic") || "All";
    if (input) input.value = nextQuery;
    const articleView = document.getElementById("article-view");
    const resultsView = document.getElementById("results-view");
    if (next.get("a")) return;
    if (articleView) articleView.hidden = true;
    if (resultsView) resultsView.hidden = false;
    document.title = "Search results — Northline Help";
    renderResults(nextQuery, nextTopic);
  });

  if (articleId) {
    const article = ARTICLES.find((item) => item.id === articleId);
    const backParams = new URLSearchParams();
    if (query) backParams.set("q", query);
    if (topic && topic !== "All") backParams.set("topic", topic);
    const backQuery = backParams.toString();
    const back = backQuery ? `search.html?${backQuery}` : "search.html";
    if (article) {
      renderArticle(article, back);
      if (typeof window.__summarizeArticle === "function") window.__summarizeArticle(article);
      const resultsView = document.getElementById("results-view");
      if (resultsView) resultsView.hidden = true;
      return;
    }
  }

  renderResults(query, topic);
}

function initHome() {
  const list = document.getElementById("popular-list");
  if (!list) return;
  const popular = ["duplicate-charge", "refund-and-dispute", "payout-hold", "inquiry-vs-dispute"];
  list.innerHTML = popular
    .map((id) => ARTICLES.find((article) => article.id === id))
    .filter(Boolean)
    .map(
      (article) => `
      <a class="result" href="article.html?id=${encodeURIComponent(article.id)}">
        <p class="result__path">${escapeHtml(article.path)}</p>
        <h3 class="result__title">${escapeHtml(article.title)}</h3>
        <p class="result__snip">${escapeHtml(article.snippet)}</p>
      </a>`
    )
    .join("");
}

const TOPIC_CITES = {
  Disputes: ["respond-dispute", "evidence-deadline"],
  Payouts: ["payout-hold", "failed-payout"],
  Verification: ["verify-account", "upload-documents"],
  Refunds: ["issue-refund", "refund-and-dispute"],
  Security: ["lost-device", "recovery-codes"]
};

const ACTION_CITES = {
  review: ["payout-hold", "payout-schedule"],
  remind: ["respond-dispute", "evidence-deadline"],
  refund: ["duplicate-charge", "refund-and-dispute"],
  reset: ["lost-device", "recovery-codes"]
};

function plain(value) {
  return { t: String(value), mark: false };
}

function defaultCites() {
  const page = document.body.dataset.page;
  if (page === "search") {
    const params = new URLSearchParams(window.location.search);
    const query = document.querySelector("[data-search-form] input[name='q']")?.value || params.get("q") || "";
    const topic = params.get("topic") || "All";
    return searchArticles(query, topic).slice(0, 2).map((article) => article.id);
  }
  if (page === "action") {
    const action = document.querySelector("#action-form [name='action']")?.value || "";
    return ACTION_CITES[action] || ["payout-hold", "respond-dispute"];
  }
  if (page === "submit") {
    const topic = document.querySelector("#case-form [name='topic']")?.value || "";
    return TOPIC_CITES[topic] || ["respond-dispute", "payout-hold"];
  }
  return [];
}

function citesForSummary(parts) {
  const page = document.body.dataset.page;
  if (page !== "search" && page !== "action" && page !== "submit") return [];
  const text = parts.map((part) => part.t || "").join(" ").toLowerCase();
  const named = ARTICLES.filter((article) => text.includes(article.title.toLowerCase())).map((article) => article.id);
  return [...new Set(named.length ? named : defaultCites())].slice(0, 2);
}

function renderCites(textEl, ids) {
  if (!ids.length) return;
  const row = document.createElement("span");
  row.className = "cite-row";
  ids.forEach((id, index) => {
    const article = ARTICLES.find((item) => item.id === id);
    if (!article) return;
    const link = document.createElement("a");
    link.className = "cite";
    link.href = `article.html?id=${encodeURIComponent(article.id)}`;
    link.dataset.cite = article.id;
    link.textContent = String(index + 1);
    link.setAttribute("aria-label", `Source ${index + 1}: ${article.title}`);
    row.appendChild(link);
  });
  if (row.childElementCount) textEl.appendChild(row);
}

function mountCitePreview() {
  if (document.querySelector(".cite-preview")) return;
  const preview = document.createElement("a");
  preview.className = "cite-preview";
  preview.hidden = true;
  preview.innerHTML = `
    <p class="cite-preview__path" data-cite-path></p>
    <strong data-cite-title></strong>
    <p data-cite-snippet></p>
    <span class="cite-preview__open">Open article</span>`;
  document.body.appendChild(preview);
  let current = null;

  function hide() {
    current = null;
    preview.hidden = true;
  }

  function show(link) {
    const article = ARTICLES.find((item) => item.id === link.dataset.cite);
    if (!article) return;
    current = link;
    preview.href = link.href;
    preview.querySelector("[data-cite-path]").textContent = article.path;
    preview.querySelector("[data-cite-title]").textContent = article.title;
    preview.querySelector("[data-cite-snippet]").textContent = article.snippet;
    preview.hidden = false;
    const rect = link.getBoundingClientRect();
    const width = preview.offsetWidth;
    const height = preview.offsetHeight;
    let left = rect.left + rect.width / 2 - width / 2;
    left = Math.max(12, Math.min(left, window.innerWidth - width - 12));
    let top = rect.top - height - 10;
    if (top < 8) top = rect.bottom + 10;
    preview.style.left = `${left}px`;
    preview.style.top = `${top}px`;
  }

  document.addEventListener("pointerover", (event) => {
    const link = event.target.closest?.(".cite");
    if (link) {
      show(link);
      return;
    }
  });
  document.addEventListener("pointerout", (event) => {
    const from = event.target.closest?.(".cite") || event.target.closest?.(".cite-preview");
    if (!from) return;
    const next = event.relatedTarget;
    if (next?.closest?.(".cite-preview") || next?.closest?.(".cite")) return;
    hide();
  });
  document.addEventListener("focusin", (event) => {
    const link = event.target.closest?.(".cite");
    if (link) show(link);
  });
  document.addEventListener("focusout", (event) => {
    if (event.target.closest?.(".cite") && current === event.target.closest(".cite")) hide();
  });
  document.querySelector(".browser-viewport")?.addEventListener("scroll", hide, { passive: true });
}

function marked(value) {
  return { t: String(value), mark: true };
}

function clipText(value, max) {
  const clean = String(value).replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const word = cut.replace(/\s+\S*$/, "");
  return `${word || cut}…`;
}

function topicLead(topic) {
  switch (topic) {
    case "Disputes":
      return [
        plain("Disputes are decided on the packet you send before the dashboard deadline. Include "),
        marked("proof of delivery, customer messages, and any refund receipt"),
        plain(" that matches the reason code.")
      ];
    case "Payouts":
      return [
        plain("Payout holds usually come from "),
        marked("incomplete verification, a dispute spike, or unusual volume"),
        plain(". Say whether the money failed, was returned, or is still sitting on hold.")
      ];
    case "Verification":
      return [
        plain("Verification finishes faster when the "),
        marked("legal name, owner id, and proof of address"),
        plain(" all match. Upload files in Account → Verification — this case alone does not attach them.")
      ];
    case "Refunds":
      return [
        plain("Refunds start on the payment itself and usually show on the card in "),
        marked("5 to 10 business days"),
        plain(". A refund does not close an open dispute on that same charge.")
      ];
    case "Security":
      return [
        plain("Owners need an authenticator app. If that device is gone, a reset needs "),
        marked("a previously trusted browser or a manual review"),
        plain(".")
      ];
    default:
      return [
        plain("Describe what you expected and what happened instead. A "),
        marked("payment, payout, or dispute id"),
        plain(" is the fastest way to find the record.")
      ];
  }
}

function keyAsk(topic) {
  switch (topic) {
    case "Disputes":
      return [plain("What decides it is "), marked("proof of delivery, customer messages, and any refund receipt"), plain(".")];
    case "Payouts":
      return [plain("Say whether this is "), marked("a hold or a returned payout"), plain(", and the date it stopped.")];
    case "Verification":
      return [plain("The files that matter are the "), marked("owner id and a proof of address under 90 days"), plain(".")];
    case "Refunds":
      return [plain("Include the "), marked("payment id and whether a dispute is also open"), plain(".")];
    case "Security":
      return [plain("Say if you still have "), marked("the recovery codes or a trusted browser"), plain(".")];
    default:
      return [plain("Add the "), marked("topic and an id"), plain(" if you have one.")];
  }
}

function landingParts(topic) {
  if (topic) return topicLead(topic);
  return [
    plain("Most cases move faster when you name "),
    marked("the topic, what you expected, and what you already tried"),
    plain(". A "),
    marked("payment or dispute id"),
    plain(" lets support open the right record without another email.")
  ];
}

function extras(draft, parts) {
  if (draft.priority === "Urgent") {
    parts.push(plain(" You marked it "), marked("urgent"), plain(", so name the payout that cannot go out and since when."));
  }
  if (draft.reference.trim()) {
    parts.push(plain(" I’ll attach "), marked(draft.reference.trim()), plain(" to the case."));
  }
  return parts;
}

function scriptForDraft(draft) {
  const details = draft.details.trim();
  const subject = draft.subject.trim();
  let parts;
  if (details.length > 8) {
    parts = [plain("You wrote: “"), marked(clipText(details, 110)), plain("”. ")];
    const gate = actionGate(draft);
    if (gate) {
      parts.push(plain("An automation already covers part of this: "), marked(gate.name), plain(". "));
    }
    parts.push(...keyAsk(draft.topic));
  } else if (subject) {
    parts = [plain("Subject so far: “"), marked(clipText(subject, 80)), plain("”. "), ...(draft.topic ? topicLead(draft.topic) : [plain("Pick a topic so this points at the right record.")])];
  } else if (draft.topic) {
    parts = topicLead(draft.topic);
  } else {
    parts = landingParts("");
  }
  return extras(draft, parts);
}

const CASE_HANDOFF_KEY = "nl-case-handoff";

function paymentIdFrom(draft) {
  const found = `${draft.details} ${draft.subject} ${draft.reference}`.match(/py_[a-z0-9]+/i);
  return found ? found[0] : "";
}

function saveCaseHandoff(draft, gate) {
  const note = [draft.subject.trim(), draft.details.trim()].filter(Boolean).join("\n\n");
  sessionStorage.setItem(CASE_HANDOFF_KEY, JSON.stringify({
    action: gate.id === "refund-action" ? "refund" : "",
    email: draft.email.trim(),
    reference: paymentIdFrom(draft),
    note
  }));
}

function readCaseHandoff() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(CASE_HANDOFF_KEY) || "null");
    return saved && typeof saved === "object" ? saved : null;
  } catch {
    return null;
  }
}

function actionGate(draft) {
  const text = `${draft.subject} ${draft.details}`.toLowerCase();
  if (/refund|extra charge|charged twice|duplicate/.test(text)) {
    return { id: "refund-action", name: "Refund a payment", label: "Run the refund action", href: "action.html" };
  }
  return null;
}

function questionPool(draft) {
  const subjectBit = draft.subject.trim() ? ` for “${clipText(draft.subject, 48)}”` : "";
  const pool = [];
  if (!draft.topic) {
    pool.push({
      id: "which-topic",
      label: "Which topic should I pick?",
      parts: () => [
        plain("Pick the area the block sits in. "),
        marked("Disputes"),
        plain(" if a cardholder challenged a charge, "),
        marked("Payouts"),
        plain(" if funds won’t leave, "),
        marked("Verification"),
        plain(" if a document was rejected.")
      ]
    });
  }
  if (draft.topic === "Disputes") {
    pool.push({
      id: "evidence",
      label: "What evidence do I need?",
      parts: () => [
        plain(`For a dispute${subjectBit}, you usually have `),
        marked("7 to 21 days"),
        plain(", and the date in the dashboard is the one that counts. Attach "),
        marked("proof of delivery, the customer thread, and a refund receipt"),
        plain(" if you already returned the funds.")
      ]
    });
  }
  if (draft.topic === "Payouts") {
    pool.push({
      id: "hold-or-return",
      label: "Is this a hold or a returned payout?",
      parts: () => [
        plain("A hold means the balance is still here and a review is open. A return means the bank sent it back — the row is marked "),
        marked("Returned"),
        plain(", and you retry after the account is fixed. Say which one you see, and since when.")
      ]
    });
  }
  if (draft.topic === "Verification") {
    pool.push({
      id: "where-upload",
      label: "Where do I upload this?",
      parts: () => [
        plain("Upload in "),
        marked("Account → Verification"),
        plain(", in the slot named on the requirement. A file attached only to this case is not added to that review. Use a "),
        marked("PDF, JPG, or PNG"),
        plain(", and keep proof of address inside 90 days.")
      ]
    });
  }
  if (draft.topic === "Refunds") {
    pool.push({
      id: "refund-dispute",
      label: "Does a refund close a dispute?",
      parts: () => [
        plain("No. Refund the payment, and also respond under Disputes. Put the "),
        marked("refund receipt in the evidence packet"),
        plain(", or the bank can still decide for the cardholder.")
      ]
    });
  }
  if (draft.topic === "Security") {
    pool.push({
      id: "lost-device",
      label: "What if I lost my authenticator?",
      parts: () => [
        plain("An owner can approve a reset from a "),
        marked("previously trusted browser"),
        plain(". Otherwise support resets it after the business is verified. Mention whether you still have the recovery codes.")
      ]
    });
  }
  if (draft.details.trim().length < 40) {
    pool.push({
      id: "how-much",
      label: "How much detail is enough?",
      parts: () => [
        plain("One short paragraph is enough: what you expected, what you saw, and what you already tried. The "),
        marked("id and the current status"),
        plain(" matter more than a click-by-click timeline.")
      ]
    });
  }
  if (!draft.reference.trim()) {
    pool.push({
      id: "need-id",
      label: "Do I need a payment or dispute id?",
      parts: () => [
        plain("If you have it, yes. Dispute ids start with "),
        marked("dp_"),
        plain(" and payment ids with "),
        marked("py_"),
        plain(". Without one, include the amount and the date so support can search.")
      ]
    });
  }
  return pool;
}

function answerFreeform(question, draft) {
  const q = question.toLowerCase();
  const pool = questionPool(draft);
  const hit =
    (/evidence|deadline|respond|packet/.test(q) && pool.find((item) => item.id === "evidence")) ||
    (/hold|return|payout/.test(q) && pool.find((item) => item.id === "hold-or-return")) ||
    (/upload|document|verif/.test(q) && pool.find((item) => item.id === "where-upload")) ||
    (/refund|dispute/.test(q) && pool.find((item) => item.id === "refund-dispute")) ||
    (/authenticator|2fa|device|lost/.test(q) && pool.find((item) => item.id === "lost-device")) ||
    (/topic|which/.test(q) && pool.find((item) => item.id === "which-topic")) ||
    (/enough|detail|how much/.test(q) && pool.find((item) => item.id === "how-much")) ||
    (/id|py_|dp_/.test(q) && pool.find((item) => item.id === "need-id"));
  if (hit) return hit.parts();
  return [
    plain("On “"),
    marked(clipText(question, 80)),
    plain("”: "),
    ...(draft.topic ? keyAsk(draft.topic) : landingParts("").slice(0, 3))
  ];
}

function missingParts(issues) {
  const labels = issues.map((issue) => issue.label);
  const parts = [
    plain("Before this can send, add "),
    marked(labels.join(", ")),
    plain(".")
  ];
  if (issues.some((issue) => issue.short)) {
    parts.push(plain(" What happened needs "), marked("at least a sentence"), plain(" — what you expected, what you saw, and what you tried."));
  }
  return parts;
}

function submittedParts(info) {
  const first = info.name.trim().split(/\s+/)[0];
  const parts = [
    plain(first ? `${first}’s case is in as ` : "This case is in as "),
    marked(info.caseId),
    plain(". A reply goes to "),
    marked(info.email.trim()),
    plain(" within "),
    marked("one business day"),
    plain(` about “${clipText(info.subject, 80)}”.`)
  ];
  if (info.priority === "Urgent") {
    parts.push(plain(" It’s in the "), marked("urgent queue"), plain(" because a payout is blocked."));
  }
  if (info.reference.trim()) {
    parts.push(plain(" Support already has "), marked(info.reference.trim()), plain("."));
  }
  return parts;
}

function initCaseAssist(form) {
  const summary = createLiveSummary(ensureSummarySlot());
  if (!summary) return { invalid() {}, submitted() {} };

  let locked = false;
  let frozen = null;
  let lastKey = "";
  let lastSig = "";
  let userEdited = false;
  let typedSinceAnswer = true;
  let questionVisible = false;
  let pauseTimer = 0;
  let rewriteTimer = 0;
  const asked = new Set();

  function field(name) {
    return form.querySelector(`[name='${name}']`)?.value || "";
  }

  function readDraft() {
    if (frozen) return frozen;
    const priority = form.querySelector("input[name='priority']:checked")?.value || "Normal";
    return {
      name: field("name"),
      email: field("email"),
      topic: field("topic"),
      subject: field("subject"),
      details: field("details"),
      reference: field("reference"),
      priority
    };
  }

  function draftKey(draft) {
    return [draft.topic, draft.subject.trim(), draft.details.trim(), draft.priority, draft.reference.trim()].join("\u0001");
  }

  function signature(parts) {
    return parts.map((part) => `${part.mark ? "*" : ""}${part.t}`).join("");
  }

  function play(parts, options) {
    lastSig = signature(parts);
    questionVisible = false;
    summary.play(parts, options);
    revealGate();
  }

  function revealGate() {
    const tick = () => {
      if (locked) return;
      if (summary.isGenerating()) {
        window.setTimeout(tick, 300);
        return;
      }
      const gate = actionGate(readDraft());
      if (gate) summary.showQuestion({ ...gate, onLeave() { saveCaseHandoff(readDraft(), gate); } });
    };
    window.setTimeout(tick, 200);
  }

  function maybeShowQuestion() {
    if (locked || !userEdited || questionVisible || !typedSinceAnswer) return;
    if (summary.isGenerating()) {
      pauseTimer = window.setTimeout(maybeShowQuestion, 350);
      return;
    }
    const draft = readDraft();
    const next = questionPool(draft).find((item) => !asked.has(item.id));
    if (!next) return;
    questionVisible = true;
    summary.showQuestion({
      id: next.id,
      label: next.label,
      parts: next.parts,
      onOpen() {
        asked.add(next.id);
        typedSinceAnswer = false;
        questionVisible = false;
        window.clearTimeout(pauseTimer);
      }
    });
  }

  function scheduleRewrite(delay) {
    window.clearTimeout(rewriteTimer);
    rewriteTimer = window.setTimeout(() => {
      if (locked) return;
      const draft = readDraft();
      const key = draftKey(draft);
      if (key === lastKey) return;
      const parts = scriptForDraft(draft);
      const sig = signature(parts);
      lastKey = key;
      if (sig === lastSig) return;
      play(parts, { meta: "Updated from what you entered", phase: "drafting" });
    }, delay);
  }

  function onUserEdit() {
    if (locked) return;
    userEdited = true;
    typedSinceAnswer = true;
    questionVisible = false;
    summary.hideQuestion();
    scheduleRewrite(700);
    window.clearTimeout(pauseTimer);
    pauseTimer = window.setTimeout(maybeShowQuestion, 1500);
  }

  ["subject", "details", "reference"].forEach((name) => {
    form.querySelector(`[name='${name}']`)?.addEventListener("input", onUserEdit);
  });
  form.querySelector("[name='topic']")?.addEventListener("change", onUserEdit);
  form.querySelectorAll("input[name='priority']").forEach((input) => {
    input.addEventListener("change", onUserEdit);
  });

  summary.setAsk((value) => {
    typedSinceAnswer = false;
    questionVisible = false;
    return answerFreeform(value, readDraft());
  });

  const opening = readDraft();
  lastKey = draftKey(opening);
  const openingParts = opening.subject.trim() || opening.topic ? scriptForDraft(opening) : landingParts("");
  play(openingParts, { meta: "Based on this form · just now", phase: "landed" });

  return {
    invalid(issues) {
      if (locked) return;
      play(missingParts(issues), { meta: "Checked the form", phase: "drafting", think: 200 });
    },
    submitted(info) {
      locked = true;
      frozen = { ...info };
      window.clearTimeout(pauseTimer);
      window.clearTimeout(rewriteTimer);
      questionVisible = false;
      summary.hideQuestion();
      play(submittedParts(info), { meta: `Case ${info.caseId}`, phase: "submitted", label: "Case received", think: 280 });
    }
  };
}

function initSubmit() {
  const form = document.getElementById("case-form");
  if (!form) return;
  const fileLabel = document.getElementById("file-name");
  const fileInput = form.querySelector("input[type='file']");
  if (fileInput && fileLabel) {
    fileInput.addEventListener("change", () => {
      fileLabel.textContent = fileInput.files?.[0]?.name || "No file selected";
    });
  }

  const params = new URLSearchParams(window.location.search);
  const preset = params.get("topic");
  if (preset) {
    const select = form.querySelector("select[name='topic']");
    if (select && [...select.options].some((option) => option.value === preset)) {
      select.value = preset;
    }
  }

  const assist = initCaseAssist(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valid = true;
    const issues = [];
    form.querySelectorAll("[data-required]").forEach((field) => {
      const control = field.querySelector("input, select, textarea");
      const value = control.value.trim();
      let message = "";
      if (!value) message = "This field is required.";
      else if (control.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = "Enter a valid email.";
      else if (control.name === "details" && value.length < 20) message = "Add a few more details (at least 20 characters).";
      field.classList.toggle("is-invalid", Boolean(message));
      const error = field.querySelector(".error");
      if (error) error.textContent = message;
      if (message) {
        valid = false;
        const label = field.querySelector("label")?.textContent || "This field";
        issues.push({ label, short: control.name === "details" && value.length > 0 });
      }
    });
    if (!valid) {
      assist.invalid(issues);
      form.querySelector(".is-invalid input, .is-invalid select, .is-invalid textarea")?.focus();
      return;
    }

    const data = new FormData(form);
    const caseId = `HC-${Math.floor(10000 + Math.random() * 89999)}`;
    assist.submitted({
      caseId,
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      subject: String(data.get("subject") || ""),
      details: String(data.get("details") || ""),
      topic: String(data.get("topic") || ""),
      reference: String(data.get("reference") || ""),
      priority: String(data.get("priority") || "Normal")
    });
    const card = document.getElementById("case-card");
    card.innerHTML = `
      <div class="success">
        <div class="success-mark" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h2>Case submitted</h2>
        <p>We sent a confirmation to ${escapeHtml(data.get("email"))}. A specialist will reply within one business day.</p>
        <div class="case-id">${caseId}</div>
        <p>Subject: ${escapeHtml(data.get("subject"))}</p>
        <div class="success-actions">
          <a class="btn-secondary" href="index.html">Back to help center</a>
          <button type="button" class="btn-primary" id="another-case">Submit another</button>
        </div>
      </div>`;
    document.getElementById("another-case").addEventListener("click", () => window.location.reload());
  });
}

const SUMMARY_STORAGE = "nl-smart-summary";

const SUMMARY_FEATURES = [
  { id: "label", name: "Label", detail: "Sparkle and the title." },
  { id: "body", name: "Summary", detail: "The drafted sentence and blue highlights." },
  { id: "generating", name: "Generating", detail: "Shimmer, scan line, and the word-by-word draft." },
  { id: "meta", name: "Meta line", detail: "The reason under the summary." },
  { id: "helpful", name: "Helpful", detail: "Thumbs on the meta row." },
  { id: "ask", name: "Ask", detail: "The question field." },
  { id: "questions", name: "Question chip", detail: "Offered after a pause." }
];

const PLACEMENTS = [
  { id: "float", name: "Float" },
  { id: "below-search", name: "Under title" },
  { id: "below-header", name: "In article" },
  { id: "rail", name: "Beside" }
];

const SCREEN_BLUEPRINT = {
  home: {
    name: "Home",
    placement: "float",
    quiet: true,
    quietLabel: "Ask a question",
    label: "AI Helper",
    askPlaceholder: "Ask a question…",
    note: "Floats centered along the bottom, and wider than the other cards. It starts as an ask field, with no summary until you ask or the page changes."
  },
  search: {
    name: "Search result",
    placement: "below-search",
    quiet: false,
    label: "AI Helper",
    askPlaceholder: "Ask a follow-up question…",
    note: "Sits under the results heading, above the list, in one column."
  },
  article: {
    name: "Knowledge article",
    placement: "below-header",
    quiet: false,
    label: "AI Helper",
    askPlaceholder: "Ask a follow-up question…",
    note: "Sits between the article title and the article body."
  },
  action: {
    name: "Action",
    placement: "rail",
    quiet: false,
    label: "AI Helper",
    askPlaceholder: "Ask a follow-up question…",
    note: "Sticks beside the automation form."
  },
  submit: {
    name: "Submit a case",
    placement: "rail",
    quiet: false,
    label: "AI Helper",
    askPlaceholder: "Ask a follow-up question…",
    note: "Sticks beside the case form."
  }
};

function readSummaryConfig() {
  try {
    const saved = JSON.parse(localStorage.getItem(SUMMARY_STORAGE) || "{}");
    return {
      parts: saved.parts && typeof saved.parts === "object" ? saved.parts : {},
      placement: saved.placement && typeof saved.placement === "object" ? saved.placement : {}
    };
  } catch {
    return { parts: {}, placement: {} };
  }
}

function writeSummaryConfig(config) {
  localStorage.setItem(SUMMARY_STORAGE, JSON.stringify(config));
}

function featureOn(id) {
  const value = readSummaryConfig().parts[id];
  return value === undefined ? true : Boolean(value);
}

function screenSpec(page) {
  return SCREEN_BLUEPRINT[page] || SCREEN_BLUEPRINT.home;
}

function placementFor(page) {
  const saved = readSummaryConfig().placement[page];
  return PLACEMENTS.some((item) => item.id === saved) ? saved : screenSpec(page).placement;
}

function applySummaryChrome(card) {
  const page = document.body.dataset.page || "home";
  const spec = screenSpec(page);
  document.body.dataset.summaryPlacement = placementFor(page);
  if (!card) return;
  card.dataset.off = SUMMARY_FEATURES.filter((feature) => !featureOn(feature.id)).map((feature) => feature.id).join(" ");
  const quiet = Boolean(spec.quiet) && card.dataset.spoke !== "1";
  card.classList.toggle("is-quiet", quiet);
  card.setAttribute("aria-label", quiet ? spec.quietLabel || "Ask a question" : "AI Helper");
  const label = card.querySelector("[data-summary-label]");
  if (label && card.dataset.spoke !== "1") label.textContent = quiet ? spec.quietLabel || "Ask a question" : spec.label;
  const input = card.querySelector("[data-summary-ask] input");
  if (input) {
    input.placeholder = spec.askPlaceholder;
    input.setAttribute("aria-label", quiet ? "Ask a question" : "Ask a follow-up question");
  }
}

function openSummary(card) {
  card.dataset.spoke = "1";
  card.classList.remove("is-quiet");
  card.setAttribute("aria-label", "AI Helper");
}

const SUMMARY_HTML = `
<section class="ai-card case-assist" aria-busy="false" aria-label="AI Helper">
  <div class="ai-card__body">
    <div class="ai-card__label" data-part="label">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"></path>
      </svg>
      <span data-summary-label>AI Helper</span>
    </div>
    <div data-part="body">
      <div class="assist-shimmer" data-part="generating" data-summary-shimmer hidden>
        <span></span><span></span><span></span>
      </div>
      <p class="ai-card__text" data-summary-text aria-hidden="true"></p>
    </div>
    <p class="assist-status" data-summary-status role="status"></p>
    <div class="ai-card__meta">
      <span data-part="meta" data-summary-meta></span>
      <span class="helpful" data-part="helpful">
        Was this helpful?
        <button type="button" data-assist-helpful="yes" aria-label="Yes, this was helpful">👍</button>
        <button type="button" data-assist-helpful="no" aria-label="No, this was not helpful">👎</button>
      </span>
    </div>
  </div>
  <div class="ai-card__ask">
    <form class="ai-ask-row" data-part="ask" data-summary-ask>
      <input type="text" placeholder="Ask a follow-up question…" aria-label="Ask a follow-up question" autocomplete="off" />
      <button type="submit" class="ai-ask-send" aria-label="Send question">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 2L11 13"></path><path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
        </svg>
      </button>
    </form>
    <div class="assist-questions" data-part="questions" data-summary-questions></div>
  </div>
</section>`;

function mountBlueprint(row) {
  const page = document.body.dataset.page || "home";
  const opener = document.createElement("a");
  opener.className = "blueprint-entry";
  opener.href = "blueprint.html";
  opener.textContent = "Blueprint";
  if (page === "blueprint") opener.setAttribute("aria-current", "page");
  row.appendChild(opener);
}

const JOURNEY_KEY = "nl-journey";

const JOURNEY_BEATS = [
  {
    screen: "home",
    href: "index.html",
    name: "Home",
    scene: "Lena has Jonah’s email in one window and a payout that will not leave on Friday. She came here to talk to someone. The page does not ask her to pick a topic. It asks for the sentence she already has, in his words: a customer says she charged him twice."
  },
  {
    screen: "search",
    href: "search.html?q=charged+twice",
    name: "Search result",
    scene: "She searches that sentence. Two records come back, not one problem. py_1044 is the extra $86. dp_3k19 is a dispute already open on the other charge, py_1043, and the reason says order 1044 never arrived. Jonah says he received it. The citations are the two articles that split those facts apart."
  },
  {
    screen: "article",
    href: "article.html?id=duplicate-charge",
    name: "Knowledge article",
    scene: "She opens the article for this situation. It explains how to tell an extra successful charge from a retry, and that an open dispute is a different record. A refund does not close that dispute, and it does not release a payout. When she reads on, the guide follows her and asks the article’s next question: does a refund close the dispute."
  },
  {
    screen: "submit",
    href: "submit.html",
    name: "Submit a case",
    scene: "She opens a case with what she knows. The helper reads it and sees the extra charge is already a refund action. Under the answer, the same kind of chip she gets for a follow-up question is the way into that action. The case can stay for the reason code."
  },
  {
    screen: "action",
    href: "action.html",
    name: "Action",
    scene: "She takes that way out. The refund is filled in for her: lena@northline.test, payment py_1044, and a note that she compared it with py_1043. Running it sends the extra $86 back to Jonah. It leaves dp_3k19 open. Friday’s payout does not move."
  }
];

const JOURNEY_END = {
  name: "What she still needs a person for",
  copy: "By the time a person reads this case, the extra charge is refunded and the dispute is named. The remaining job is to move dp_3k19 off “product not received” before today’s deadline, so Lena can upload the carrier scan against the reason the bank will actually read."
};

function mountJourney(row) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "blueprint-entry journey-entry";
  button.textContent = "Journey";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", "journey");
  button.addEventListener("click", () => {
    const panel = document.getElementById("journey");
    if (!panel) return;
    setJourneyOpen(panel, button, panel.hidden);
  });
  row.appendChild(button);
}

function setJourneyOpen(panel, button, open) {
  panel.hidden = !open;
  button.setAttribute("aria-expanded", open ? "true" : "false");
  button.setAttribute("aria-pressed", open ? "true" : "false");
  if (open) {
    sessionStorage.setItem(JOURNEY_KEY, "1");
    const testPanel = document.getElementById("test-plan");
    const testButton = document.querySelector(".test-entry");
    if (testPanel && testButton) setTestPlanOpen(testPanel, testButton, false, true);
  } else sessionStorage.removeItem(JOURNEY_KEY);
  window.dispatchEvent(new Event("resize"));
}

function mountJourneyPanel() {
  const page = document.body.dataset.page || "home";
  const panel = document.createElement("aside");
  panel.className = "journey";
  panel.id = "journey";
  panel.hidden = true;
  panel.setAttribute("aria-label", "User journey");

  const head = document.createElement("div");
  head.className = "journey__head";
  const titles = document.createElement("div");
  const kicker = document.createElement("p");
  kicker.className = "journey__kicker";
  kicker.textContent = "Lena Ortiz";
  const title = document.createElement("h2");
  title.textContent = "Charged twice";
  titles.append(kicker, title);
  const close = document.createElement("button");
  close.type = "button";
  close.className = "journey__close";
  close.textContent = "Close";
  close.addEventListener("click", () => {
    const button = document.querySelector(".journey-entry");
    if (button) setJourneyOpen(panel, button, false);
  });
  head.append(titles, close);

  const scroll = document.createElement("div");
  scroll.className = "journey__scroll";

  const lede = document.createElement("p");
  lede.className = "journey__lede";
  lede.textContent = "Thursday morning. Jonah Hale writes that order 1044 was charged twice, $86 and $86. One of those charges is already dispute dp_3k19, and the reason says the order never arrived. Friday’s payout is on hold. Lena Ortiz opens help to ask someone to release it.";
  scroll.appendChild(lede);

  JOURNEY_BEATS.forEach((beat, index) => {
    const card = document.createElement("article");
    card.className = "journey-beat";
    if (beat.screen === page) card.classList.add("is-here");
    const label = document.createElement("p");
    label.className = "journey-beat__step";
    label.textContent = `${index + 1} · ${beat.name}`;
    card.appendChild(label);
    const scene = document.createElement("p");
    scene.textContent = beat.scene;
    card.appendChild(scene);
    if (beat.screen !== page) {
      const link = document.createElement("a");
      link.className = "journey-beat__go";
      link.href = beat.href;
      link.textContent = `Open ${beat.name}`;
      link.addEventListener("click", () => sessionStorage.setItem(JOURNEY_KEY, "1"));
      card.appendChild(link);
    } else {
      const here = document.createElement("p");
      here.className = "journey-beat__here";
      here.textContent = "This is the screen in the window.";
      card.appendChild(here);
    }
    scroll.appendChild(card);
  });

  const end = document.createElement("article");
  end.className = "journey-note";
  const endName = document.createElement("strong");
  endName.textContent = JOURNEY_END.name;
  const endCopy = document.createElement("p");
  endCopy.textContent = JOURNEY_END.copy;
  end.append(endName, endCopy);
  scroll.appendChild(end);

  panel.append(head, scroll);

  if (sessionStorage.getItem(JOURNEY_KEY) === "1") {
    queueMicrotask(() => {
      const button = document.querySelector(".journey-entry");
      if (button) setJourneyOpen(panel, button, true);
    });
  }
  return panel;
}

const TEST_PLAN_KEY = "nl-test-plan";

const TEST_PLAN = [
  {
    name: "Will they talk to it",
    href: "index.html",
    screen: "Home",
    watch: "Home opens as an empty ask. The first thing they touch is the result: the ask box, search, a chip, or Submit a case, while the tile is still quiet.",
    path: "On Home, log the first interaction and whether the tile had been spoken to. Those four targets are the outcomes. A session that leaves Home without touching the tile counts as silence."
  },
  {
    name: "One tile, four seats",
    href: "search.html?q=charged+twice",
    screen: "Search result",
    watch: "The helper moves from a float, to under the results, into the article, and beside a form. If they treat it as one thing, they continue on the new seat. Starting the question over means they did not.",
    path: "Stamp every impression with one component id and its placement, tied to the session. Compare time to first use on each later seat with the first, and flag a retyped question. After the second seat, one yes or no in the product — “Same helper as the last page?” — is stored on that impression."
  },
  {
    name: "Their words, the article’s title",
    href: "article.html?id=duplicate-charge",
    screen: "Knowledge article",
    watch: "They asked about being charged twice. The page is titled Duplicate charges. Staying and using the page means the title held. Going straight back to search means it did not.",
    path: "Store the phrase they typed beside the article id and the helper text. Log time on the page, scroll depth, and a return to search. On the way out, one yes or no — “Did this page match what you asked?” — is saved with that pair. The article title stays the knowledge name."
  },
  {
    name: "A citation before they leave",
    href: "search.html?q=charged+twice",
    screen: "Search result",
    watch: "A number on the helper counts when they open its preview and then the article. Opening the first result without touching a number means they went around it.",
    path: "Log cite hover, preview shown, how long the preview stayed, cite click, and result click, in order. Search, the action, and the case already render those links. The sequence is the score."
  },
  {
    name: "The helper that follows the article",
    href: "article.html?id=duplicate-charge",
    screen: "Knowledge article",
    watch: "After a screen of scrolling, the tile shrinks to a follow-up at the bottom. They use that chip, scroll back to the full tile, or leave. Those are the three outcomes.",
    path: "Log dock and undock with scroll depth. Tag clicks on the small tile separately from clicks while it is still in the article. A session that docks and never clicks or undocks is an ignore."
  },
  {
    name: "A way out of the case",
    href: "submit.html",
    screen: "Submit a case",
    watch: "Once the helper offers the refund action, they take the chip or they submit the case. The choice is the result.",
    path: "When the chip appears, store the action id and the words that matched. Record the chip click or the case submit, and the seconds between the offer and that choice. A submit with the chip still on screen is the case-anyway outcome."
  },
  {
    name: "Not typing it twice",
    href: "action.html",
    screen: "Action",
    watch: "The action already holds the email, the payment id, and the note. They keep a field, change it, or clear it. Clearing a field removes its mark.",
    path: "Save the case draft with the handoff. When the action is submitted, compare each field to that draft and mark it kept, edited, or cleared. Also log a clear that hid the mark. Fields left as carried are a pass."
  },
  {
    name: "The question that waits",
    href: "article.html?id=duplicate-charge",
    screen: "Knowledge article",
    watch: "A suggestion appears when they pause. They open it, type their own question, or leave it. Opening it means it was the question. Typing past it means it was not.",
    path: "Timestamp the pause, the chip label, an open, and a question they type themselves. A typed question after the chip is showing is a miss. Thumbs on the same row join the same stream."
  }
];

function mountTestPlan(row) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "blueprint-entry test-entry";
  button.textContent = "Test plan";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", "test-plan");
  button.addEventListener("click", () => {
    const panel = document.getElementById("test-plan");
    if (!panel) return;
    setTestPlanOpen(panel, button, panel.hidden);
  });
  row.appendChild(button);
}

function setTestPlanOpen(panel, button, open, silent) {
  panel.hidden = !open;
  button.setAttribute("aria-expanded", open ? "true" : "false");
  button.setAttribute("aria-pressed", open ? "true" : "false");
  if (open) {
    sessionStorage.setItem(TEST_PLAN_KEY, "1");
    const journeyPanel = document.getElementById("journey");
    const journeyButton = document.querySelector(".journey-entry");
    if (journeyPanel && journeyButton && !journeyPanel.hidden) setJourneyOpen(journeyPanel, journeyButton, false);
  } else sessionStorage.removeItem(TEST_PLAN_KEY);
  if (!silent) window.dispatchEvent(new Event("resize"));
}

function mountTestPlanPanel() {
  const panel = document.createElement("aside");
  panel.className = "journey";
  panel.id = "test-plan";
  panel.hidden = true;
  panel.setAttribute("aria-label", "Unsupervised user testing plan");

  const head = document.createElement("div");
  head.className = "journey__head";
  const titles = document.createElement("div");
  const kicker = document.createElement("p");
  kicker.className = "journey__kicker";
  kicker.textContent = "AI Helper";
  const title = document.createElement("h2");
  title.textContent = "User testing";
  titles.append(kicker, title);
  const close = document.createElement("button");
  close.type = "button";
  close.className = "journey__close";
  close.textContent = "Close";
  close.addEventListener("click", () => {
    const button = document.querySelector(".test-entry");
    if (button) setTestPlanOpen(panel, button, false);
  });
  head.append(titles, close);

  const scroll = document.createElement("div");
  scroll.className = "journey__scroll";
  const lede = document.createElement("p");
  lede.className = "journey__lede";
  lede.textContent = "Unsupervised. They get a link and the task below, and finish alone. Each card is answered from what they do. A yes or no appears in the product only when the action cannot show it, and they answer that themselves.";
  const task = document.createElement("p");
  task.className = "journey__lede";
  task.textContent = "Task: A customer says order 1044 was charged twice. Find what to do next. Stop when the refund is started or a case is sent.";
  scroll.append(lede, task);

  TEST_PLAN.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "journey-beat";
    const label = document.createElement("p");
    label.className = "journey-beat__step";
    label.textContent = `${index + 1} · ${item.name}`;
    card.appendChild(label);
    [
      ["On their own", item.watch],
      ["Path", item.path]
    ].forEach(([name, copy]) => {
      const block = document.createElement("p");
      const strong = document.createElement("strong");
      strong.textContent = name;
      block.append(strong, document.createTextNode(` ${copy}`));
      card.appendChild(block);
    });
    const link = document.createElement("a");
    link.className = "journey-beat__go";
    link.href = item.href;
    link.textContent = `Open ${item.screen}`;
    link.addEventListener("click", () => sessionStorage.setItem(TEST_PLAN_KEY, "1"));
    card.appendChild(link);
    scroll.appendChild(card);
  });

  panel.append(head, scroll);

  if (sessionStorage.getItem(TEST_PLAN_KEY) === "1") {
    queueMicrotask(() => {
      const button = document.querySelector(".test-entry");
      if (button) setTestPlanOpen(panel, button, true);
    });
  }
  return panel;
}

function initBlueprintPage() {
  if (document.body.dataset.page !== "blueprint") return;
  const partsRoot = document.querySelector("[data-blueprint-parts]");
  const screensRoot = document.querySelector("[data-blueprint-screens]");
  if (!partsRoot || !screensRoot) return;

  SUMMARY_FEATURES.forEach((feature) => {
    const label = document.createElement("label");
    label.className = "bp-switch";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.dataset.feature = feature.id;
    const copy = document.createElement("span");
    const name = document.createElement("strong");
    name.textContent = feature.name;
    const detail = document.createElement("small");
    detail.textContent = feature.detail;
    copy.append(name, detail);
    label.append(input, copy);
    input.addEventListener("change", () => {
      const config = readSummaryConfig();
      config.parts[feature.id] = input.checked;
      writeSummaryConfig(config);
      refreshBlueprint();
    });
    partsRoot.appendChild(label);
  });

  Object.entries(SCREEN_BLUEPRINT).forEach(([id, spec]) => {
    const row = document.createElement("div");
    row.className = "bp-screen-row";
    row.dataset.screen = id;
    const copy = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = spec.name;
    const note = document.createElement("p");
    note.textContent = spec.note;
    copy.append(name, note);
    const places = document.createElement("div");
    places.className = "bp-places";
    PLACEMENTS.forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "bp-place";
      button.dataset.placement = item.id;
      button.textContent = item.name;
      button.addEventListener("click", () => {
        const config = readSummaryConfig();
        config.placement[id] = item.id;
        writeSummaryConfig(config);
        refreshBlueprint();
      });
      places.appendChild(button);
    });
    row.append(copy, places);
    screensRoot.appendChild(row);
  });

  function refreshBlueprint() {
    document.querySelectorAll("[data-bp]").forEach((node) => {
      node.classList.toggle("is-off", !featureOn(node.dataset.bp));
    });
    document.querySelectorAll(".bp-switch input").forEach((input) => {
      input.checked = featureOn(input.dataset.feature);
    });
    document.querySelectorAll(".bp-screen-row").forEach((row) => {
      const current = placementFor(row.dataset.screen);
      row.querySelectorAll(".bp-place").forEach((button) => {
        button.setAttribute("aria-pressed", button.dataset.placement === current ? "true" : "false");
      });
    });
  }

  document.querySelector("[data-blueprint-reset]")?.addEventListener("click", () => {
    localStorage.removeItem(SUMMARY_STORAGE);
    refreshBlueprint();
  });
  refreshBlueprint();

  const frame = document.querySelector(".bp-stage__frame");
  const stageLabel = document.querySelector("[data-stage-label]");
  const poses = [
    ["float", "Float"],
    ["inline", "In the content"],
    ["beside", "Beside"]
  ];
  if (frame && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let index = 0;
    window.setInterval(() => {
      index = (index + 1) % poses.length;
      const [id, name] = poses[index];
      frame.dataset.pose = id;
      if (stageLabel) stageLabel.textContent = name;
      document.querySelectorAll("[data-stage-chip]").forEach((chip) => {
        chip.classList.toggle("is-on", chip.dataset.stageChip === id);
      });
    }, 2400);
  }
}

function mountTabs() {
  if (document.querySelector(".studio")) return;
  const page = document.body.dataset.page || "";
  const tabs = [
    ["home", "index.html", "Home", "help.northline.test"],
    ["search", "search.html?q=charged+twice", "Search result", "help.northline.test/search?q=charged+twice"],
    ["article", "article.html?id=duplicate-charge", "Knowledge article", "help.northline.test/articles/duplicate-charges"],
    ["submit", "submit.html", "Submit a case", "help.northline.test/cases/new"],
    ["action", "action.html", "Action", "help.northline.test/actions/new"]
  ];
  const address = page === "blueprint"
    ? "help.northline.test/blueprint"
    : (tabs.find(([id]) => id === page) || tabs[0])[3];

  const bar = document.createElement("div");
  bar.className = "studio-bar";
  const nav = document.createElement("nav");
  nav.className = "screen-tabs";
  nav.setAttribute("aria-label", "Screens");
  tabs.forEach(([id, href, label]) => {
    const link = document.createElement("a");
    link.href = href;
    link.textContent = label;
    if (id === page) link.setAttribute("aria-current", "page");
    nav.appendChild(link);
  });
  bar.appendChild(nav);
  mountJourney(bar);
  mountTestPlan(bar);
  mountBlueprint(bar);

  const chrome = document.createElement("div");
  chrome.className = "browser-chrome";
  chrome.setAttribute("aria-hidden", "true");
  chrome.innerHTML = `
    <span class="browser-dots"><i></i><i></i><i></i></span>
    <div class="browser-address">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
        <rect x="5" y="11" width="14" height="9" rx="2"></rect>
        <path d="M8 11V8a4 4 0 0 1 8 0v3"></path>
      </svg>
      <span></span>
    </div>`;
  chrome.querySelector(".browser-address span").textContent = address;

  const viewport = document.createElement("div");
  viewport.className = "browser-viewport";
  [...document.body.childNodes].forEach((node) => {
    if (node.nodeType === 1 && node.tagName === "SCRIPT") return;
    if (node.nodeType === 3 && !node.textContent.trim()) return;
    viewport.appendChild(node);
  });

  const browser = document.createElement("div");
  browser.className = "browser";
  browser.setAttribute("role", "region");
  browser.setAttribute("aria-label", "Website");
  browser.append(chrome, viewport);

  const stage = document.createElement("div");
  stage.className = "studio-stage";
  stage.append(browser, mountJourneyPanel(), mountTestPlanPanel());

  const studio = document.createElement("div");
  studio.className = "studio";
  studio.append(bar, stage);
  document.body.appendChild(studio);
  document.body.dataset.summaryPlacement = placementFor(page);
}

function ensureSummarySlot() {
  const slot = document.querySelector("[data-summary-slot]");
  if (!slot) return null;
  if (!slot.querySelector(".case-assist")) slot.innerHTML = SUMMARY_HTML;
  const card = slot.querySelector(".case-assist");
  applySummaryChrome(card);
  return card;
}

function createLiveSummary(card) {
  if (!card) return null;
  const textEl = card.querySelector("[data-summary-text]");
  const metaEl = card.querySelector("[data-summary-meta]");
  const labelEl = card.querySelector("[data-summary-label]");
  const shimmer = card.querySelector("[data-summary-shimmer]");
  const statusEl = card.querySelector("[data-summary-status]");
  const questionBox = card.querySelector("[data-summary-questions]");
  const askForm = card.querySelector("[data-summary-ask]");
  const askInput = askForm?.querySelector("input");
  if (!textEl || !metaEl || !labelEl) return null;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  mountCitePreview();
  const caret = document.createElement("span");
  caret.className = "assist-caret";
  caret.setAttribute("aria-hidden", "true");

  let gen = 0;
  let generating = false;
  let askHandler = null;

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  let gateQuestion = null;
  let followQuestion = null;

  function chipFor(question) {
    const button = question.href ? document.createElement("a") : document.createElement("button");
    button.className = "question-btn";
    if (question.href) {
      button.href = question.href;
      button.addEventListener("click", () => {
        if (question.onLeave) question.onLeave();
      });
    } else button.type = "button";
    const badge = document.createElement("span");
    badge.className = "q";
    badge.setAttribute("aria-hidden", "true");
    badge.textContent = question.href ? "→" : "?";
    button.append(badge, document.createTextNode(question.label));
    if (!question.href) {
      button.addEventListener("click", () => {
        button.setAttribute("aria-pressed", "true");
        if (question.onOpen) question.onOpen();
        const parts = typeof question.parts === "function" ? question.parts() : question.parts;
        play(parts, { meta: "Answered your question", phase: "answered" });
      });
    }
    return button;
  }

  function paintQuestions() {
    if (!questionBox) return;
    questionBox.replaceChildren();
    if (gateQuestion) questionBox.appendChild(chipFor(gateQuestion));
    if (followQuestion) questionBox.appendChild(chipFor(followQuestion));
  }

  function hideQuestion() {
    followQuestion = null;
    paintQuestions();
  }

  function showQuestion(question) {
    if (!featureOn("questions") || !questionBox || !question) return;
    if (question.href) gateQuestion = question;
    else followQuestion = question;
    paintQuestions();
    if (!question.href && !generating && featureOn("meta")) {
      metaEl.textContent = "You paused — this might help";
      card.dataset.phase = "hesitating";
    }
  }

  function finish(parts, options, flags) {
    caret.remove();
    generating = false;
    card.classList.remove("is-generating");
    card.setAttribute("aria-busy", "false");
    if (flags.label) labelEl.textContent = options.label || "AI Helper";
    if (flags.meta) metaEl.textContent = options.meta || "";
    card.dataset.phase = options.phase || "ready";
    if (statusEl) statusEl.textContent = parts.map((part) => part.t).join("");
  }

  async function play(parts, options = {}) {
    const token = ++gen;
    const alive = () => token === gen;
    openSummary(card);
    const flags = {
      body: featureOn("body"),
      generating: featureOn("generating"),
      meta: featureOn("meta"),
      label: featureOn("label")
    };
    const instant = reduceMotion || !flags.generating;
    generating = true;
    card.dataset.phase = "drafting";
    card.setAttribute("aria-busy", "true");
    if (flags.generating && flags.body) card.classList.add("is-generating");
    if (textEl.textContent && !instant && flags.body) {
      card.classList.add("is-rewriting");
      await wait(140);
      if (!alive()) return;
      card.classList.remove("is-rewriting");
    }
    if (flags.label) labelEl.textContent = "Drafting";
    if (flags.meta) metaEl.textContent = "Reading this screen";
    textEl.replaceChildren();
    if (!flags.body) {
      if (shimmer) shimmer.hidden = true;
      textEl.hidden = true;
      finish(parts, options, flags);
      return;
    }
    textEl.hidden = true;
    if (shimmer) shimmer.hidden = !flags.generating;
    const think = flags.generating ? (options.think ?? 640) : 0;
    await wait(instant ? 0 : think + Math.round(Math.random() * 120));
    if (!alive()) return;
    if (shimmer) shimmer.hidden = true;
    textEl.hidden = false;

    if (instant) {
      parts.forEach((part) => {
        if (!part.t) return;
        if (part.mark) {
          const markEl = document.createElement("mark");
          markEl.textContent = part.t;
          markEl.classList.add("is-hot");
          textEl.appendChild(markEl);
        } else {
          textEl.appendChild(document.createTextNode(part.t));
        }
      });
    } else {
      let count = 0;
      for (const part of parts) {
        if (!part.t) continue;
        const markEl = part.mark ? document.createElement("mark") : null;
        if (markEl) textEl.appendChild(markEl);
        const parent = markEl || textEl;
        const tokens = part.t.split(/(\s+)/);
        for (const tokenText of tokens) {
          if (!alive()) return;
          if (!tokenText) continue;
          if (/^\s+$/.test(tokenText)) {
            parent.appendChild(document.createTextNode(tokenText));
            continue;
          }
          const word = document.createElement("span");
          word.className = "assist-word";
          word.textContent = tokenText;
          parent.appendChild(word);
          textEl.appendChild(caret);
          count += 1;
          await wait(count < 7 ? 28 : 14);
        }
        if (markEl) markEl.classList.add("is-hot");
      }
    }

    if (!alive()) return;
    renderCites(textEl, citesForSummary(parts));
    finish(parts, options, flags);
  }

  askForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = askInput?.value.trim() || "";
    if (!value || generating) return;
    askInput.value = "";
    hideQuestion();
    const parts = askHandler
      ? askHandler(value)
      : [plain("On “"), marked(clipText(value, 80)), plain("”.")];
    play(parts, { meta: "Answered your question", phase: "answered" });
  });

  card.querySelectorAll("[data-assist-helpful]").forEach((button) => {
    button.addEventListener("click", () => {
      card.querySelectorAll("[data-assist-helpful]").forEach((other) => other.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      if (!generating) metaEl.textContent = "Thanks — noted.";
    });
  });

  return {
    play,
    showQuestion,
    hideQuestion,
    isGenerating: () => generating,
    setAsk(handler) {
      askHandler = handler;
    }
  };
}

function armPause(summary, getQuestion) {
  const asked = new Set();
  let timer = 0;
  return function poke() {
    window.clearTimeout(timer);
    summary.hideQuestion();
    const tick = () => {
      if (summary.isGenerating()) {
        timer = window.setTimeout(tick, 350);
        return;
      }
      const question = getQuestion(asked);
      if (question) summary.showQuestion(question);
    };
    timer = window.setTimeout(tick, 1500);
  };
}

function summaryParts(query, topic, results) {
  const q = (query || "").toLowerCase();
  let lead = topic && topic !== "All" ? topic : "";
  if (!lead) {
    if (/hold|payout|reserve/.test(q)) lead = "Payouts";
    else if (/verif|document|upload|identity|kyc/.test(q)) lead = "Verification";
    else if (/refund/.test(q)) lead = "Refunds";
    else if (/dispute|chargeback|evidence/.test(q)) lead = "Disputes";
    else if (/2fa|authenticator|security|recovery|login/.test(q)) lead = "Security";
  }
  if (!results.length) {
    return [plain("Nothing matches that wording. Try a shorter phrase, or "), marked("submit a case"), plain(".")];
  }
  if (/twice|duplicate/.test(q)) {
    return [
      plain("This is two records. "),
      marked("py_1044"),
      plain(" is the extra $86. "),
      marked("dp_3k19"),
      plain(" is already open on the other charge, and the reason says the order never arrived. Start with "),
      marked("Duplicate charges"),
      plain(", then "),
      marked("Refund a payment that already has a dispute"),
      plain(". Friday’s payout stays held until the dispute is answered in the dashboard.")
    ];
  }
  if (lead) {
    const count = `${results.length} matching article${results.length === 1 ? "" : "s"}`;
    return [...topicLead(lead), plain(" "), marked(count), plain(".")];
  }
  const top = results[0];
  return [plain("The closest match is "), marked(top.title), plain(". "), plain(top.snippet)];
}

function mountSearchSummary() {
  const summary = createLiveSummary(ensureSummarySlot());
  if (!summary) return;
  const pause = armPause(summary, (asked) => {
    const query = document.querySelector("[data-search-form] input[name='q']")?.value || "";
    const topic = new URLSearchParams(window.location.search).get("topic") || "";
    if (/twice|duplicate/.test(query.toLowerCase()) && !asked.has("payout")) {
      return {
        id: "payout",
        label: "Does refunding the extra charge release Friday’s payout?",
        onOpen() { asked.add("payout"); },
        parts: () => [
          plain("No. Friday’s payout stays held until "),
          marked("dp_3k19"),
          plain(" is answered in Disputes. Refunding "),
          marked("py_1044"),
          plain(" only returns the extra $86.")
        ]
      };
    }
    if ((/dispute|evidence/.test(query.toLowerCase()) || topic === "Disputes") && !asked.has("evidence")) {
      return { id: "evidence", label: "What evidence do I need?", onOpen() { asked.add("evidence"); }, parts: () => topicLead("Disputes") };
    }
    if (!asked.has("which")) {
      return {
        id: "which",
        label: "Which result should I open?",
        onOpen() { asked.add("which"); },
        parts: () => {
          const results = searchArticles(query, topic || "All");
          const top = results[0];
          if (!top) return [plain("None of these match. "), marked("Submit a case"), plain(" if the phrase is already short.")];
          return [plain("Start with "), marked(top.title), plain(". "), plain(top.snippet)];
        }
      };
    }
    return null;
  });
  window.__summarizeSearch = (query, topic, results) => {
    summary.play(summaryParts(query, topic, results), {
      meta: results.length ? `Based on ${results.length} articles` : "No matching articles",
      phase: "drafting",
      think: 320
    });
    pause();
  };
  window.__summarizeArticle = (article) => {
    summary.play(
      [plain(article.snippet), plain(" Start with "), marked(article.steps[0] || article.title), plain(".")],
      { meta: article.path, phase: "drafting", think: 240 }
    );
  };
  let hovered = "";
  document.getElementById("result-list")?.addEventListener("mouseover", (event) => {
    const link = event.target.closest("[data-id]");
    if (!link || link.dataset.id === hovered) return;
    hovered = link.dataset.id;
    const article = ARTICLES.find((item) => item.id === hovered);
    if (!article) return;
    summary.play(
      [plain("This result is "), marked(article.title), plain(". "), plain(article.snippet)],
      { meta: article.path, phase: "drafting", think: 160 }
    );
    pause();
  });
  summary.setAsk((value) => answerFreeform(value, {
    topic: new URLSearchParams(window.location.search).get("topic") || "",
    subject: "",
    details: value,
    reference: "",
    priority: "Normal"
  }));
}

function initHomeSummary() {
  if (document.body.dataset.page !== "home") return;
  const summary = createLiveSummary(ensureSummarySlot());
  if (!summary) return;
  const input = document.querySelector("[data-search-form] input[name='q']");
  let focusTopic = "";
  const pause = armPause(summary, (asked) => {
    const typed = input?.value.trim() || "";
    if (typed && !asked.has("typed")) {
      return {
        id: "typed",
        label: `Search for “${clipText(typed, 42)}”?`,
        onOpen() { asked.add("typed"); },
        parts: () => [plain("That lines up with "), marked(typed), plain(". The Search result tab opens the matching articles.")]
      };
    }
    if (!asked.has("where")) {
      return {
        id: "where",
        label: "Where should I start?",
        onOpen() { asked.add("where"); },
        parts: () => [
          plain("If money is stuck, open "),
          marked("Payouts"),
          plain(". If a cardholder wrote in, open "),
          marked("Disputes"),
          plain(".")
        ]
      };
    }
    return null;
  });
  input?.addEventListener("focus", () => {
    summary.play(
      [plain("Type the thing you’re stuck on. "), marked("Dispute, payout, verification, or refund"), plain(" is enough to start.")],
      { meta: "Reading the search field", phase: "drafting", think: 220 }
    );
  });
  input?.addEventListener("input", () => {
    const value = input.value.trim();
    if (value.length < 2) return;
    summary.play(
      [plain("You’re describing "), marked(clipText(value, 80)), plain(". I’ll match that against the help articles.")],
      { meta: "Updated from what you typed", phase: "drafting", think: 200 }
    );
    pause();
  });
  document.querySelectorAll(".topic-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const name = card.querySelector("h2")?.textContent?.trim() || "";
      if (!name || name === focusTopic) return;
      focusTopic = name;
      const known = ["Disputes", "Payouts", "Verification", "Refunds", "Security"].includes(name);
      summary.play(
        known ? topicLead(name) : [plain("If the articles don’t cover it, "), marked("submit a case"), plain(" and include the payment or dispute id.")],
        { meta: name, phase: "drafting", think: 180 }
      );
      pause();
    });
  });
  summary.setAsk((value) => answerFreeform(value, {
    topic: ["Disputes", "Payouts", "Verification", "Refunds", "Security"].includes(focusTopic) ? focusTopic : "",
    subject: "",
    details: value,
    reference: "",
    priority: "Normal"
  }));
  bindHomeFloat();
}

function bindHomeFloat() {
  if (document.body.dataset.summaryPlacement !== "float") return;
  const viewport = document.querySelector(".browser-viewport");
  const slot = document.querySelector("[data-summary-slot]");
  if (!viewport || !slot) return;

  function pin() {
    const width = Math.min(420, Math.max(240, viewport.clientWidth - 48));
    slot.style.width = `${width}px`;
    slot.style.left = `${viewport.clientWidth - width - 24}px`;
    slot.style.top = `${viewport.scrollTop + viewport.clientHeight - slot.offsetHeight - 20}px`;
  }

  let ticking = false;
  function schedule() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      pin();
    });
  }

  viewport.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  if (window.ResizeObserver) new ResizeObserver(schedule).observe(slot);
  pin();
}

function chargedTwiceArticle(article) {
  const steps = article.steps.map((step) => escapeHtml(step));
  const stepList = steps
    .map(
      (step, index) =>
        `<li><button type="button" class="step-hit" data-step="${index}"><span class="step-num">${index + 1}</span><span>${step}</span></button></li>`
    )
    .join("");
  return `
    <p>You might see two charges from the same purchase on your card statement. That does not always mean you paid twice. This page explains what those lines usually are, and what happens if one of them is refunded.</p>
    <h2>Why you might see two lines</h2>
    <p>Your bank can show a pending authorization and then the final charge. It can also show a payment that did not go through, followed by one that did. Those are not two payments.</p>
    <p>You were charged twice when both lines went through for the same order and the same amount. Each one has its own payment. A line that failed, or that is still pending, is not money you paid.</p>
    <h2>What a refund does</h2>
    <p>A refund sends one of those payments back to your card. If you were charged twice, that is the extra payment, not both. You should see it on your statement in 5 to 10 business days. Your bank decides the exact day.</p>
    <p>A refund does not erase the other charge. It also does not cancel a dispute you already opened with your bank.</p>
    <h2>If you already contacted your bank</h2>
    <p>A dispute is your bank asking about one charge. It stays on that charge even if another payment for the same amount is refunded. The bank’s review and the refund are two different things.</p>
    <p>The date in a letter from your bank may not match the date you see with the business. Use the date on the dispute itself. A refund receipt can be part of that review, but the refund alone does not finish it.</p>
    <h2>What you can check</h2>
    <ol class="article-steps">${stepList}</ol>
    <h2>Did both charges go through?</h2>
    <p>On your statement, look at the status of each line. Pending and failed charges are not a second payment. Two posted charges for the same order are.</p>
    <h2>Is a refund on the way?</h2>
    <p>Look for a refund in the amount of the extra charge. It can take 5 to 10 business days to appear. The original charge can stay on your statement while the refund is listed separately.</p>
    <h2>Did you also ask your bank to review a charge?</h2>
    <p>That review continues on its own. A refund of the other charge does not close it. If something on this page does not match what you see, <a href="submit.html" style="color: var(--brand-navy-deep); font-weight: 600;">contact support</a> and tell us the date and amount on your statement.</p>`;
}

function longArticleHtml(article) {
  if (article.id === "duplicate-charge") return chargedTwiceArticle(article);
  const title = escapeHtml(article.title);
  const topic = escapeHtml(article.topic);
  const snippet = escapeHtml(article.snippet);
  const steps = article.steps.map((step) => escapeHtml(step));
  const paragraphs = article.paragraphs.map((paragraph) => escapeHtml(paragraph));
  const stepBlocks = steps
    .map(
      (step, index) => `
      <h2>${index + 1}. ${step}</h2>
      <p>${step} Do this before you move on. ${topic} cases are decided on the packet you send, not on a note you meant to add later. Keep the file name obvious, and don’t mix this step with the next one.</p>
      <p>If you are unsure, stop and reread “${title}”. The dashboard date is the one that counts. A file sent after that date is not added to the review, even when the charge itself was valid.</p>`
    )
    .join("");
  return `
    ${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    <h2>Why the summary is the short version</h2>
    <p>${snippet} The rest of this article is the long version: what to open, what to attach, what to ignore, and what happens after you send it. If you only have a minute, the summary above is the part worth keeping.</p>
    <p>People usually land here after something already went wrong — a hold, a deadline, or a customer who wrote in. Read the heading, then the summary, then come back to the section that matches where you are stuck. You do not need to finish every paragraph before you act.</p>
    <h2>Where to work in the dashboard</h2>
    <p>Stay inside the ${topic} area named in the summary. A screenshot from email, a forwarded thread, or a note in another tool does not become part of the case. The review only sees what you submit on that screen.</p>
    <p>Open the record that matches the id you were given. If two rows look alike, compare the ids before you attach anything. Sending a complete packet on the wrong record is the same as sending nothing on the right one.</p>
    <p>${paragraphs[0] || snippet} Write down the id, the date on the screen, and the reason before you start collecting files. Those three facts are what the rest of the steps hang on.</p>
    <h2>Work through it in order</h2>
    <ol class="article-steps">
      ${steps
        .map(
          (step, index) =>
            `<li><button type="button" class="step-hit" data-step="${index}"><span class="step-num">${index + 1}</span><span>${step}</span></button></li>`
        )
        .join("")}
    </ol>
    ${stepBlocks}
    <h2>A full pass, not a partial one</h2>
    <p>Gather everything the reason asks for before you upload. A half packet is reviewed as-is. You usually cannot add the missing page after the case has moved on, and a second upload does not extend the date on the screen.</p>
    <p>Name files so a reviewer can tell them apart: the notice, the delivery proof, the customer thread, the refund receipt. One combined scan is harder to read than four short files. Keep each file under the size shown on the upload screen.</p>
    <p>Match the evidence to the reason. A delivery case needs a carrier scan. A “not as described” case needs the listing and the policy the customer accepted. A duplicate-charge case needs both payment ids. Extra files that don’t answer the reason do not help.</p>
    <h2>What usually goes wrong</h2>
    <p>The deadline in a bank letter is not the deadline in the dashboard. Use the date on the case. Late files are not reviewed, even when the charge was valid and the customer was wrong.</p>
    <p>Emailing the file to support does not attach it. The address on your account and the name on the document have to match. A blurry photo, a cropped edge, or a password-protected file is treated as missing.</p>
    <p>Refunding the customer does not close the case by itself. If you already returned the money, put the receipt in the packet and still send the response. The two actions answer different questions.</p>
    <h2>After you send it</h2>
    <p>You should get a confirmation with a case id. Keep that id. Status changes show on the same record, not in a separate inbox. A win returns the charge after the network releases it. A loss keeps the debit, and a fee that posted when the case opened is not returned with it.</p>
    <p>If the articles still don’t cover what you are seeing, submit a case and include the payment or dispute id, what you already tried, and the confirmation id if you have one. Cases are answered within one business day.</p>
    <p>Still stuck after these steps? <a href="submit.html" style="color: var(--brand-navy-deep); font-weight: 600;">Submit a case</a> and include the payment or dispute id.</p>`;
}

function initArticlePage() {
  if (document.body.dataset.page !== "article") return;
  const params = new URLSearchParams(window.location.search);
  const article = ARTICLES.find((item) => item.id === params.get("id")) || ARTICLES.find((item) => item.id === "duplicate-charge") || ARTICLES[0];
  const root = document.getElementById("article-root");
  if (!root) return;
  document.title = `${article.title} — Northline Help`;
  root.innerHTML = `
    <header class="article-head">
      <p class="article-kicker">${escapeHtml(article.path)} · Updated ${escapeHtml(article.updated)}</p>
      <h1>${escapeHtml(article.title)}</h1>
    </header>
    <div data-summary-slot></div>
    <div class="article-body">
      ${longArticleHtml(article)}
    </div>`;

  const summary = createLiveSummary(ensureSummarySlot());
  if (!summary) return;
  const questions = {
    Disputes: { id: "deadline", label: "What if I miss the deadline?", parts: () => [plain("A late packet is "), marked("not reviewed"), plain(", even when the charge was valid. The date on the dispute is the one that counts.")] },
    Payouts: { id: "balance", label: "Is the balance still mine?", parts: () => [plain("Yes. A hold "), marked("does not cancel the balance"), plain(". It stays until the review finishes.")] },
    Verification: { id: "email-file", label: "Can I send the file by email?", parts: () => [plain("No. Email is not added to the review. Upload in "), marked("Account → Verification"), plain(".")] },
    Refunds: { id: "close", label: "Does a refund close a dispute?", parts: () => [plain("No. Refund the payment, and still respond in Disputes with the "), marked("refund receipt"), plain(".")] },
    Security: { id: "codes", label: "What if I lost the recovery codes?", parts: () => [plain("Support can reset access after "), marked("the business is verified"), plain(". A previously trusted browser is faster.")] }
  };
  const articleQuestion = article.id === "duplicate-charge"
    ? {
        id: "close",
        label: "Does a refund cancel a dispute with my bank?",
        parts: () => [
          plain("No. A refund returns one payment to your card. A dispute you opened with your bank "),
          marked("stays open"),
          plain(" until the bank finishes its review.")
        ]
      }
    : null;
  const pause = armPause(summary, (asked) => {
    if (articleQuestion && !asked.has(articleQuestion.id)) {
      return { ...articleQuestion, onOpen() { asked.add(articleQuestion.id); } };
    }
    const topicQuestion = questions[article.topic];
    if (topicQuestion && !asked.has(topicQuestion.id)) {
      return { ...topicQuestion, onOpen() { asked.add(topicQuestion.id); } };
    }
    if (!asked.has("step")) {
      return {
        id: "step",
        label: "Which step matters most?",
        onOpen() { asked.add("step"); },
        parts: () => [plain("Start with your statement: which lines "), marked("actually went through"), plain(", and whether a refund is already listed.")]
      };
    }
    return null;
  });
  const opening = article.id === "duplicate-charge"
    ? [
        plain("You said you were charged twice. This page explains when both charges actually went through, and what a "),
        marked("refund"),
        plain(" changes. A dispute with your bank stays separate.")
      ]
    : [plain(article.snippet)];
  summary.play(opening, { meta: `From this article · Updated ${article.updated}`, phase: "landed" });
  pause();
  root.querySelectorAll("[data-step]").forEach((button) => {
    button.addEventListener("click", () => {
      root.querySelectorAll("[data-step]").forEach((other) => other.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      const index = Number(button.dataset.step);
      summary.play(
        [plain("In this article: "), marked(article.steps[index]), plain(".")],
        { meta: "Updated from the step you opened", phase: "drafting", think: 220 }
      );
      pause();
    });
  });
  summary.setAsk((value) => {
    const q = value.toLowerCase();
    if (articleQuestion && /refund|close|dispute/.test(q)) return articleQuestion.parts();
    const topicQuestion = questions[article.topic];
    if (topicQuestion && /deadline|hold|email|upload|refund|code|lost/.test(q)) return topicQuestion.parts();
    return [plain("On “"), marked(clipText(value, 80)), plain("”: "), plain(article.snippet)];
  });
  bindArticleDock(summary, articleQuestion || questions[article.topic]);
}

function bindArticleDock(summary, suggestion) {
  const viewport = document.querySelector(".browser-viewport");
  const slot = document.querySelector("[data-summary-slot]");
  if (!viewport || !slot) return;
  let docked = false;
  let animating = false;
  let spacer = null;
  let flipId = 0;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function pin() {
    slot.style.top = `${viewport.scrollTop + viewport.clientHeight - slot.offsetHeight - 20}px`;
  }

  function flip(first, last) {
    if (reduceMotion) {
      animating = false;
      if (docked) pin();
      return;
    }
    const dx = first.left - last.left;
    const dy = first.top - last.top;
    if (Math.abs(dx) < 1 && Math.abs(dy) < 1) {
      animating = false;
      if (docked) pin();
      return;
    }
    const id = ++flipId;
    animating = true;
    slot.style.transition = "none";
    slot.style.transform = `translate(${dx}px, ${dy}px)`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (id !== flipId) return;
        slot.style.transition = "transform 560ms cubic-bezier(0.22, 1, 0.36, 1)";
        slot.style.transform = "translate(0px, 0px)";
      });
    });
    const done = (event) => {
      if (id !== flipId || event.propertyName !== "transform") return;
      slot.style.transition = "";
      slot.style.transform = "";
      animating = false;
      if (docked) pin();
      slot.removeEventListener("transitionend", done);
    };
    slot.addEventListener("transitionend", done);
  }

  function dock() {
    if (docked) return;
    const first = slot.getBoundingClientRect();
    const styles = getComputedStyle(slot);
    spacer = document.createElement("div");
    spacer.className = "summary-spacer";
    spacer.style.height = `${slot.offsetHeight + parseFloat(styles.marginTop) + parseFloat(styles.marginBottom)}px`;
    slot.before(spacer);
    viewport.appendChild(slot);
    slot.classList.add("is-docked");
    document.body.classList.add("is-summary-docked");
    pin();
    const box = slot.querySelector("[data-summary-questions]");
    if (suggestion && box && !box.childElementCount) summary.showQuestion(suggestion);
    docked = true;
    flip(first, slot.getBoundingClientRect());
  }

  function undock() {
    if (!docked) return;
    const first = slot.getBoundingClientRect();
    docked = false;
    slot.classList.remove("is-docked");
    document.body.classList.remove("is-summary-docked");
    slot.style.transition = "";
    slot.style.transform = "";
    slot.style.top = "";
    if (spacer) spacer.replaceWith(slot);
    spacer = null;
    flip(first, slot.getBoundingClientRect());
  }

  const marker = document.createElement("div");
  marker.setAttribute("aria-hidden", "true");
  marker.style.cssText = "position:absolute;left:0;width:1px;height:1px;pointer-events:none;";
  viewport.appendChild(marker);

  function placeMarker() {
    marker.style.top = `${viewport.clientHeight}px`;
  }

  let ticking = false;
  function sync() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const rel = marker.getBoundingClientRect().top - viewport.getBoundingClientRect().top;
      if (!docked && rel <= 0) dock();
      else if (docked && rel > 120) undock();
      else if (docked && !animating) pin();
    });
  }

  placeMarker();
  const observer = new IntersectionObserver(sync, { root: viewport, threshold: [0, 1] });
  observer.observe(marker);
  viewport.addEventListener("scroll", sync, { passive: true });
  window.addEventListener("resize", () => {
    placeMarker();
    sync();
  });
}

const ACTION_LABELS = {
  review: "Request a payout review",
  remind: "Send an evidence reminder",
  refund: "Refund a payment",
  reset: "Reset an authenticator"
};

function readAction(form) {
  return {
    action: form.querySelector("[name='action']")?.value || "",
    email: form.querySelector("[name='email']")?.value.trim() || "",
    reference: form.querySelector("[name='reference']")?.value.trim() || "",
    note: form.querySelector("[name='note']")?.value.trim() || ""
  };
}

function actionParts(draft) {
  if (!draft.action) {
    return [
      plain("Pick an action and who it applies to. Nothing runs until you confirm. A "),
      marked("reference id"),
      plain(" keeps the automation on the right record.")
    ];
  }
  const parts = [plain("Ready to run "), marked(ACTION_LABELS[draft.action] || draft.action)];
  if (draft.email) parts.push(plain(" for "), marked(draft.email));
  parts.push(plain(". "));
  if (draft.action === "review") parts.push(plain("This queues a review. It does "), marked("not release the hold"), plain(" by itself."));
  if (draft.action === "remind") parts.push(plain("The owner gets one email about "), marked("the evidence deadline"), plain("."));
  if (draft.action === "refund" && /py_1044/.test(draft.reference)) {
    parts.push(
      plain("This returns the extra $86 on "),
      marked("py_1044"),
      plain(". It does not answer "),
      marked("dp_3k19"),
      plain(", and it does not release Friday’s payout.")
    );
  } else if (draft.action === "refund") {
    parts.push(plain("This "), marked("refunds the payment"), plain(" and does not close an open dispute."));
  }
  if (draft.action === "reset") parts.push(plain("This signs them out and "), marked("clears the authenticator"), plain("."));
  if (draft.reference) parts.push(plain(" I’ll attach "), marked(draft.reference), plain("."));
  if (draft.note.length > 8) parts.push(plain(" Note so far: “"), marked(clipText(draft.note, 90)), plain("”."));
  return parts;
}

function applyCaseHandoff(form) {
  const saved = readCaseHandoff();
  if (!saved?.action) return false;
  const fields = [
    ["action", saved.action],
    ["email", saved.email],
    ["reference", saved.reference],
    ["note", saved.note]
  ];
  let carried = false;
  fields.forEach(([name, value]) => {
    const input = form.querySelector(`[name='${name}']`);
    if (!input || !value) return;
    input.value = value;
    const field = input.closest(".field");
    const label = field?.querySelector("label");
    if (!field || !label) return;
    let tag = field.querySelector(".carry-tag");
    if (!tag) {
      tag = document.createElement("span");
      tag.className = "carry-tag";
      tag.textContent = "From your case";
      label.appendChild(tag);
    }
    const sync = () => {
      const empty = !String(input.value).trim();
      tag.hidden = empty;
    };
    input.addEventListener("input", sync);
    input.addEventListener("change", sync);
    sync();
    carried = true;
  });
  return carried;
}

function initActionPage() {
  if (document.body.dataset.page !== "action") return;
  const form = document.getElementById("action-form");
  const summary = createLiveSummary(ensureSummarySlot());
  if (!form || !summary) return;
  const carried = applyCaseHandoff(form);
  let locked = false;
  let lastKey = "";
  const pause = armPause(summary, (asked) => {
    if (locked) return null;
    const draft = readAction(form);
    const specific = {
      review: { id: "release", label: "Will this release the hold?", parts: () => [plain("No. The review checks the flags. The hold lifts only after "), marked("verification and open disputes"), plain(" are clear.")] },
      remind: { id: "who", label: "Who gets the reminder?", parts: () => [plain("It goes to the "), marked("account email"), plain(" on this form, not to the cardholder.")] },
      refund: /py_1044/.test(draft.reference)
        ? { id: "now", label: "Does this release Friday’s payout?", parts: () => [plain("No. Jonah gets the extra $86 back in "), marked("5 to 10 business days"), plain(". Friday’s payout stays held until "), marked("dp_3k19"), plain(" is answered in Disputes.")] }
        : { id: "now", label: "Does this refund the customer now?", parts: () => [plain("The refund submits now. The card usually shows it in "), marked("5 to 10 business days"), plain(".")] },
      reset: { id: "signout", label: "Will they be signed out?", parts: () => [plain("Yes. Every session ends, and they need "), marked("a new authenticator"), plain(" to get back in.")] }
    }[draft.action];
    if (specific && !asked.has(specific.id)) return { ...specific, onOpen() { asked.add(specific.id); } };
    if (!asked.has("safe")) {
      return {
        id: "safe",
        label: "Does anything run before I confirm?",
        onOpen() { asked.add("safe"); },
        parts: () => [plain("No. "), marked("Run action"), plain(" is the only control that queues it.")]
      };
    }
    return null;
  });

  function refresh(think) {
    if (locked) return;
    const draft = readAction(form);
    const key = [draft.action, draft.email, draft.reference, draft.note].join("\u0001");
    if (key === lastKey) return;
    lastKey = key;
    summary.play(actionParts(draft), { meta: draft.action ? "Updated from this action" : "Based on this form · just now", phase: "drafting", think });
  }

  summary.play(actionParts(readAction(form)), {
    meta: carried ? "Filled from your case" : "Based on this form · just now",
    phase: "landed"
  });
  pause();
  let inputTimer = 0;
  form.querySelector("[name='action']")?.addEventListener("change", () => {
    refresh(220);
    pause();
  });
  ["email", "reference", "note"].forEach((name) => {
    form.querySelector(`[name='${name}']`)?.addEventListener("input", () => {
      window.clearTimeout(inputTimer);
      inputTimer = window.setTimeout(() => {
        refresh(240);
        pause();
      }, 650);
    });
  });
  summary.setAsk((value) => {
    const draft = readAction(form);
    const q = value.toLowerCase();
    if (/release|hold|friday|payout/.test(q) && draft.action === "refund") {
      return [plain("No. Refunding "), marked(draft.reference || "this payment"), plain(" does not release Friday’s payout. The hold waits on the open dispute.")];
    }
    if (/release|hold/.test(q)) return [plain("A payout review does "), marked("not release the hold"), plain(" on its own.")];
    if (/refund/.test(q)) return [plain("A refund "), marked("does not close a dispute"), plain(" on that charge.")];
    if (/sign|authenticator|reset/.test(q)) return [plain("A reset "), marked("signs them out"), plain(" of every session.")];
    return [plain("On “"), marked(clipText(value, 72)), plain("”: "), ...actionParts(draft)];
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (locked) return;
    let valid = true;
    const issues = [];
    form.querySelectorAll("[data-required]").forEach((field) => {
      const control = field.querySelector("input, select, textarea");
      const value = control.value.trim();
      let message = "";
      if (!value) message = "This field is required.";
      else if (control.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = "Enter a valid email.";
      field.classList.toggle("is-invalid", Boolean(message));
      const error = field.querySelector(".error");
      if (error) error.textContent = message;
      if (message) {
        valid = false;
        issues.push(field.querySelector("label")?.textContent || "This field");
      }
    });
    if (!valid) {
      summary.play(
        [plain("Before this can run, add "), marked(issues.join(" and ")), plain(".")],
        { meta: "Checked the form", phase: "drafting", think: 200 }
      );
      form.querySelector(".is-invalid input, .is-invalid select, .is-invalid textarea")?.focus();
      return;
    }
    const draft = readAction(form);
    const runId = `ACT-${Math.floor(10000 + Math.random() * 89999)}`;
    locked = true;
    summary.hideQuestion();
    summary.play(
      [
        plain(`${ACTION_LABELS[draft.action]} is queued for `),
        marked(draft.email),
        plain(". The log id is "),
        marked(runId),
        plain(draft.reference ? `. Reference ${draft.reference} is attached.` : ".")
      ],
      { meta: `Action ${runId}`, phase: "submitted", label: "Action queued", think: 280 }
    );
    const card = document.getElementById("action-card");
    card.innerHTML = `
      <div class="success">
        <div class="success-mark" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5"></path></svg>
        </div>
        <h2>Action queued</h2>
        <p>${escapeHtml(ACTION_LABELS[draft.action])} will run for ${escapeHtml(draft.email)}.</p>
        <div class="case-id">${runId}</div>
        <div class="success-actions">
          <a class="btn-secondary" href="index.html">Back to help center</a>
          <button type="button" class="btn-primary" id="another-action">Run another</button>
        </div>
      </div>`;
    document.getElementById("another-action").addEventListener("click", () => window.location.reload());
  });
}

mountTabs();
initSearchForms();
initHome();
initHomeSummary();
initSearchPage();
initArticlePage();
initBlueprintPage();
initActionPage();
initSubmit();
