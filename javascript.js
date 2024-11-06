// Event data for each day with specific times
const events = {
    monday: [
        "9:00 AM - 11:00 AM: Meeting with the team."
    ],
    tuesday: [
        "3:00 PM - 4:00 PM: Project deadline."
    ],
    wednesday: [
        "1:00 PM - 2:00 PM: Lunch with the client.",
        "2:00 PM - 3:00 PM: Team brainstorming session.",
        "4:00 PM - 5:00 PM: Wrap-up meeting."
    ],
    thursday: [
        "2:00 PM - 3:30 PM: Presentation preparation."
    ],
    friday: [
        "3:00 PM - 4:00 PM: End of week review."
    ],
    saturday: [
        "6:00 PM - 8:00 PM: Family gathering."
    ],
    sunday: [
        "All day: Relax and prepare for the week ahead."
    ]
};

// Function to show event information
function showEvent(day, index) {
    const eventInfo = document.getElementById('eventInfo');
    eventInfo.innerText = events[day][index];
}
