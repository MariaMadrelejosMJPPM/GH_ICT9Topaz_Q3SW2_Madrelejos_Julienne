function compute_budget() {
    let budget = Number(document.getElementById('budget').value);
    let percentage = (budget * 0.2);

    document.getElementById('output').innerHTML = percentage;
}