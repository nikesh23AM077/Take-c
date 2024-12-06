function searchDisease() {
    const input = document.getElementById('searchInput').value.trim();
    const resultsDiv = document.getElementById('results');

    const data = [
        { area: 'Thiruvananthapuram', disease: 'Hepatitis A', cases: 17, date: '2024-05-23' },
        { area: 'Thiruvananthapuram', disease: 'Dengue fever', cases: 2000, date: '2024-06-01' },
        { area: 'Thiruvananthapuram', disease: 'Amoebic brain fever', cases: 7, date: '2024-07-23' },
        { area: 'Thiruvananthapuram', disease: 'Cholera', cases: 2, date: '2024-06-15' },
        { area: 'Thiruvananthapuram', disease: 'PAM', cases: 5, date: '2024-07-07' },
        { area: 'Kollam', disease: 'Fever', cases: 6151, date: '2024-05-20' },
        { area: 'Kollam', disease: 'Dengue', cases: 2000, date: '2024-06-01' },
        { area: 'Kollam', disease: 'Shigella', cases: 10, date: '2024-06-10' },
        { area: 'Kollam', disease: 'Amoebic meningoencephalitis', cases: 1, date: '2024-06-05' },
        { area: 'Pathanamthitta', disease: 'Dengue', cases: 2000, date: '2024-06-01' },
        { area: 'Pathanamthitta', disease: 'Leptospirosis', cases: 3, date: '2024-06-10' },
        { area: 'Pathanamthitta', disease: 'Diabetes', cases: 50000, date: '2024-06-15' },
        { area: 'Pathanamthitta', disease: 'Hypertension', cases: 40000, date: '2024-06-15' },
        { area: 'Alappuzha', disease: 'Dengue', cases: 44, date: '2024-09-01' },
        { area: 'Alappuzha', disease: 'H1N1', cases: 35, date: '2024-05-14' },
        { area: 'Alappuzha', disease: 'Malaria', cases: 4, date: '2024-07-01' },
        { area: 'Alappuzha', disease: 'Avian influenza', cases: 100, date: '2024-04-10' },
        { area: 'Alappuzha', disease: 'Monkeypox', cases: 1, date: '2024-08-10' },
        { area: 'Kottayam', disease: 'Dengue', cases: 2000, date: '2024-06-01' },
        { area: 'Kottayam', disease: 'Fever', cases: 200, date: '2024-06-15' },
        { area: 'Idukki', disease: 'Dengue', cases: 2000, date: '2024-09-26' },
        { area: 'Idukki', disease: 'Leptospirosis', cases: 17, date: '2024-06-01' },
        { area: 'Idukki', disease: 'West Nile', cases: 5, date: '2024-05-10' },
        { area: 'Ernakulam', disease: 'H1N1', cases: 11, date: '2024-07-01' },
        { area: 'Thrissur', disease: 'Dengue', cases: 48, date: '2024-06-20' },
        { area: 'Palakkad', disease: 'Dengue', cases: 2000, date: '2024-06-01' },
        { area: 'Malappuram', disease: 'Nipah virus', cases: 1, date: '2024-09-01' },
        { area: 'Malappuram', disease: 'Mpox', cases: 1, date: '2024-09-10' },
        { area: 'Kozhikode', disease: 'Nipah virus', cases: 10, date: '2024-08-01' },
        { area: 'Kasaragod', disease: 'H1N1 and H3N2 flu', cases: 9, date: '2024-09-01' }
    ];

    resultsDiv.innerHTML = '';

    if (input === '') {
        // Display unique city names when no input is provided
        const uniqueCities = [...new Set(data.map(entry => entry.area))];
        resultsDiv.innerHTML = '<h3>List of Cities</h3>';
        const cityList = document.createElement('ul');
        uniqueCities.forEach(city => {
            const listItem = document.createElement('li');
            listItem.textContent = city;
            cityList.appendChild(listItem);
        });
        resultsDiv.appendChild(cityList);
    } else {
        const filteredData = data.filter(entry => entry.area.toLowerCase().includes(input.toLowerCase()));
        if (filteredData.length > 0) {
            const table = document.createElement('table');
            table.className = 'data-table';

            const thead = document.createElement('thead');
            thead.innerHTML = `
                <tr>
                    <th>Area</th>
                    <th>Disease</th>
                    <th>Cases</th>
                    <th>Last Updated</th>
                </tr>
            `;
            table.appendChild(thead);

            const tbody = document.createElement('tbody');
            filteredData.forEach(entry => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${entry.area}</td>
                    <td>${entry.disease}</td>
                    <td>${entry.cases}</td>
                    <td>${entry.date}</td>
                `;
                tbody.appendChild(row);
            });

            table.appendChild(tbody);
            resultsDiv.appendChild(table);
        } else {
            resultsDiv.innerHTML = '<p>No results found for the given area.</p>';
        }
    }
}
