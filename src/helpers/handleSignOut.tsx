export const handleSignOut = (setUser: React.Dispatch<React.SetStateAction<any>>, navigate: any) => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
};