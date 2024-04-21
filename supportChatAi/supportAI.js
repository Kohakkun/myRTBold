// Function to send manual question when user clicks send button
document.getElementById('sendQuestionBtn').addEventListener('click', function() {
    sendManualQuestion();
});

// Function to handle manual question submission
function sendManualQuestion() {
    var manualQuestionInput = document.getElementById('manualQuestionInput').value;

    // Call selectQuestion() with manual question input
    selectQuestion(manualQuestionInput);
}

// Function to select a question
function selectQuestion(question) {
    var selectedQuestion = document.getElementById('selectedQuestion');
    var aidlyResponse = document.getElementById('aidlyResponse');
    var confirmation = document.getElementById('confirmation');
    var questionList = document.getElementById('questionList');
    var selectedQuestionBox = document.getElementById('selectedQuestionBox');
    var aidlyResponseBox = document.getElementById('aidlyResponseBox');
    var chatManual = document.getElementById('chatManual');

    selectedQuestion.textContent = question;
    aidlyResponse.textContent = "Jawaban Anda akan Segera Dijawab oleh Admin";

    // Hide the question list
    questionList.style.display = 'none';

    // Show selected question and Aidly's response
    selectedQuestionBox.style.display = 'block';
    aidlyResponseBox.style.display = 'block';

    // Show confirmation
    confirmation.style.display = 'flex';

    // Hide chat manual
    chatManual.style.display = 'none';
}

// Function to reset chat
function resetChat() {
    var questionList = document.getElementById('questionList');
    var selectedQuestionBox = document.getElementById('selectedQuestionBox');
    var aidlyResponseBox = document.getElementById('aidlyResponseBox');
    var confirmation = document.getElementById('confirmation');
    var thankYouMessage = document.getElementById('thankYouMessage');
    var chatManual = document.getElementById('chatManual');

    // Reset all elements to initial state
    questionList.style.display = 'block';
    selectedQuestionBox.style.display = 'none';
    aidlyResponseBox.style.display = 'none';
    confirmation.style.display = 'none';
    thankYouMessage.style.display = 'none';
    chatManual.style.display = 'flex';

    // Clear selected question and Aidly's response
    document.getElementById('selectedQuestion').textContent = '';
    document.getElementById('aidlyResponse').textContent = '';
}

// Function to handle "Ya" confirmation
function confirmYes() {
    var thankYouMessage = document.getElementById('thankYouMessage');
    var confirmation = document.getElementById('confirmation');
    confirmation.style.display = 'none';
    thankYouMessage.style.display = 'block';

    // Reset chat after 5 seconds
    setTimeout(resetChat, 3000);
}

// Function to handle "Tidak" confirmation
function confirmNo() {
    var questionList = document.getElementById('questionList');
    var selectedQuestionBox = document.getElementById('selectedQuestionBox');
    var aidlyResponseBox = document.getElementById('aidlyResponseBox');
    var confirmation = document.getElementById('confirmation');
    var chatManual = document.getElementById('chatManual');
    var thankYouMessage = document.getElementById('thankYouMessage');

    // Reset all elements to initial state
    questionList.style.display = 'block';
    selectedQuestionBox.style.display = 'none';
    aidlyResponseBox.style.display = 'none';
    confirmation.style.display = 'none';
    thankYouMessage.style.display = 'none';
    chatManual.style.display = 'flex';

    // Clear selected question and Aidly's response
    document.getElementById('selectedQuestion').textContent = '';
    document.getElementById('aidlyResponse').textContent = '';

    // Clear manual question input
    document.getElementById('manualQuestionInput').value = '';
}

// Function to get bot response based on user message
function getBotResponse(question) {
    // Simulate bot response based on user question, you can replace this with actual response logic
    switch (question) {
        case 'Apakah di sekitar RTB banyak penjual makanan?':
            return "Ada beberapa tukang penjual makanan saat sore seperti Nasi Goreng Mas Ardi, telur gulung, siomay, ada juga taman budaya dan warung pojok sosro di mana ada beberapa pilihan makanan yang variatif. Pemesanan makanan online juga bisa dilakukan via online food yang biasa digunakan maupun pesan langsung via WA seperti Terrace Lupita dan Warunng Bu Sri";
        case 'Apa saja tempat hiburan di sekitar RTB?':
            return "Ada beberapa tempat hiburan sekitar RTB seperti Taman Budaya yang berisi kuliner dan permainan outdoor, Jungleland, tracking ke curug di Sentul, dan mall AEON Sentul.";
        case 'Bagaimana akses peribadatan setiap agama dari RTB?':
            return "Setiap peribatan dibantu dengan koordinasi dari masing-masing organisasi keagamaan. Contohnya: Gereja Kristen ada GBI, GKI, dan GMS.";
        case 'Bagaimana tata cara booking fasilitas di RTB?':
            return "Pertama-tama user harus login terlebih dahulu sebagai mahasiswa, kemudian user dapat memilih menu booking fasilitas melalui navbar, home page, atau facility page di web myRTB. Setelah itu mahasiswa memilih fasilitas yang ingin dibooking dengan memencet tombol 'reservasi'. Kemudian mahasiswa mengisi detail peminjaman fasilitas terkait dan menekan tombol 'kirim'. Setelah itu mahasiswa mendapatkan informasi bahwa booking berhasil dilakukan dan dapat melihat jadwal bookingnya.";
        default:
            return "Maaf, saya tidak mengerti pertanyaan tersebut.";
    }
}
