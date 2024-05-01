import AdminNavigationBar from "../components/AdminNavigationBar/AdminNavigationBar";
import AdminPosts from "../components/AdminPosts";
import Posts from "../components/Posts"

function AdminPage(){
    return(
        <>
        <AdminNavigationBar />
        <AdminPosts />
        </>
    )
}

export default AdminPage;