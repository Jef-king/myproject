function formatEmails() {
    let input = document.getElementById('emailInput').value;
    let formatted = input.replace(/\(at\)/g, '@').replace(/\[at\]/g, '@').trim();
    document.getElementById('emailOutput').value = formatted;
}
async function pasteText() {
    try {
        const text = await navigator.clipboard.readText();
        let input = document.getElementById('emailInput').value;
        document.getElementById('emailInput').value=input+text+'\n';
    } catch (err) {
        console.error('Failed to read clipboard contents: ', err);
    }
}
function copyText() {
    let copyText = document.getElementById("emailOutput").value;
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);
}
function clearText(){
    document.getElementById('emailInput').value="";
    document.getElementById('emailOutput').value ="";
}