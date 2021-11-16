import UserUseCases from "./User/useCases";

const domain = {
    ...UserUseCases,
    cleanStorageUseCase: () => {
        localStorage.clear();
    }
}

export default domain;