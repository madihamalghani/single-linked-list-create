let linkedList = [];

// Function to add a node
function addNode() {
    const value = document.getElementById('node-value').value;
    const maxNodes = parseInt(document.getElementById('max-nodes').value);
    
    if (value === '' || value < 0){
        document.getElementById('data-invalid').style.display = 'block';

         return;} // Prevent adding empty values
    if (isNaN(maxNodes) || maxNodes <= 0){
    document.getElementById('limit-invalid').style.display = 'block'; // Show limit message

    return;} // Ensure maxNodes is a valid number

    // Check if the current linked list length is less than the maximum allowed
    if (linkedList.length >= maxNodes) {
        document.getElementById('limit-message').style.display = 'block'; // Show limit message
        return;
    }

    document.getElementById('limit-message').style.display = 'none'; // Hide the message if we're still adding nodes
    document.getElementById('limit-invalid').style.display = 'none'; // Hide the message if we're still adding nodes
    document.getElementById('data-invalid').style.display = 'none'; // Hide the message if we're still adding nodes

    // Add value to the linked list array
    linkedList.push(value);

    // Clear input field
    document.getElementById('node-value').value = '';

    // Display the linked list
    displayLinkedList();
}

// Function to display the linked list
function displayLinkedList() {
    const linkedListContainer = document.getElementById('linked-list');
    linkedListContainer.innerHTML = ''; // Clear previous display

    for (let i = 0; i < linkedList.length; i++) {
        // Create a new node element
        const nodeElement = document.createElement('div');
        nodeElement.classList.add('node');
        
        // Add data to the node
        const dataElement = document.createElement('div');
        dataElement.classList.add('node-data');
        dataElement.innerText = linkedList[i];
        nodeElement.appendChild(dataElement);

        // Add pointer label to the node
        const pointerElement = document.createElement('div');
        pointerElement.classList.add('pointer');
        pointerElement.innerText = (i === linkedList.length - 1) ? 'null' : `&n${i + 2}`;
        nodeElement.appendChild(pointerElement);

        // Append node to the container
        linkedListContainer.appendChild(nodeElement);

        // Add an arrow between nodes (except for the last one)
        if (i < linkedList.length - 1) {
            const arrow = document.createElement('span');
            arrow.classList.add('arrow');
            arrow.innerHTML = '&#8594';
            linkedListContainer.appendChild(arrow);
        }
    }
}
