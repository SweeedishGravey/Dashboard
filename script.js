document.addEventListener('DOMContentLoaded', function () {
    const modules = document.querySelectorAll('.module');
    const moduleContents = document.querySelectorAll('.module-content');

    modules.forEach((module, index) => {
        module.addEventListener('click', function () {
            // Hide all module contents
            moduleContents.forEach((content) => {
                content.style.display = 'none';
            });

            // Show the selected module content
            moduleContents[index].style.display = 'block';
        });
    });
});
