// toggle-button
function toggleStyle(id) {
    const all = document.getElementById('all');
    const open = document.getElementById('open');
    const close = document.getElementById('close');

    all.classList.remove('btn-primary', 'text-white');
    open.classList.remove('btn-primary', 'text-white');
    close.classList.remove('btn-primary', 'text-white');

    all.classList.add('bg-gray-100');
    open.classList.add('bg-gray-100');
    close.classList.add('bg-gray-100');

    const clickedBtn = document.getElementById(id);
    clickedBtn.classList.remove('bg-gray-100');
    clickedBtn.classList.add('btn-primary', 'text-white');
}


//api call
async function loadAll() {
    const response = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const dt = await response.json();
    displayCard(dt.data);
}

document.getElementById('all').addEventListener('click', loadAll);
loadAll();

//display data on the container
const displayCard = (allData) => {
        const container = document.getElementById('container');
        container.innerHTML = '';
        for (let data of allData) {
            const borderColor = data.status === 'open' ? 'green' : data.status === 'medium' ? 'green' : 'blue';
            const div = document.createElement('div');
            div.classList.add('cursor-pointer');
            div.onclick = () => openModal(data);

            div.innerHTML = `<div style="border-top: 4px solid ${borderColor}" class="bg-white shadow-md rounded-2xl border p-4 flex flex-col gap-3">

<div class="flex justify-end">
  <span class="text-xs font-semibold rounded-full px-3 py-1 border bg-amber-200">${data.priority}</span>
</div>

  <h2 class="font-bold text-base">${data.title}</h2>

  <p class="text-sm">${data.description}</p>

  <div class="flex gap-2">
${data.labels.map(label => `
  <span class="text-xs border rounded-full px-3 py-1">${label}</span>
`).join('')}
  </div>

  <hr />

<div class='flex justify-between items-center'>
 <div class="text-xs">
    <p>${data.author}</p>
    <p>${data.createdAt}</p>
  </div>
  <div class="text-xs">
    <p>${data.updatedAt}</p>
  </div>
</div>

</div>`;
        container.appendChild(div);
    }

    document.getElementById('total-issues').innerText = allData.length;
}
//open
document.getElementById('open').addEventListener('click', async function() {
    toggleStyle('open');
    const response = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const dt = await response.json();
    const openData = dt.data.filter(item => item.status === 'open');
    displayCard(openData);
});

//close
document.getElementById('close').addEventListener('click', async function() {
    toggleStyle('close');
    const response = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const dt = await response.json();
    const closeData = dt.data.filter(item => item.status === 'closed');
    displayCard(closeData);
});

//search
document.getElementById('issues').addEventListener('click', async function() {
    const searchText = document.getElementById('search').value.trim();
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`);
    const data = await res.json();
    displayCard(data.data);
    document.getElementById('total-issues').innerText = data.data.length;
});