function ModalSpinner() {
    return (
        <div
            id="defaultModal"
            tabindex="-1"
            aria-hidden="false"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
        >
            <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default ModalSpinner;
