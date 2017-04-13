import './css/styles.scss';

const secretButton = document.getElementById('secretButton');
const secretParagraph = document.getElementById('secretParagraph');
let showSecret = false;

// event listeners
secretButton.addEventListener('click', toggleSecretState);

function toggleSecretState() {
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretBtn();
}

const updateSecretParagraph = () => {
    if (showSecret) {
        secretButton.textContent = 'Hide me';
    } else {
        secretButton.textContent = 'Show me';
    }
};

const updateSecretBtn = () => {
    if (showSecret) {
        secretParagraph.style.display = 'block';
        secretParagraph.textContent = 'Yours and I\'ll show you mine';
    } else {
        secretParagraph.style.display = 'none';
    }
};
