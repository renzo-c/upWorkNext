export const setUser = (store, user) => {
    store.setState({ user });
};

export const updateUser = (store, dic) => {
    const { user } = store.state;
    const newDic = {
        ...user,
        ...dic,
    };
    store.setState({ user: newDic });
};