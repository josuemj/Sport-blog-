import './AdminNavigationBar.css'
function AdminNavigationBar(){
    return(
        <>
        <div className="adminNavBar">
            <button>
                New Post
            </button>
            <button>
                Update Post
            </button>
            <button>
                Delete Post
            </button>
        </div>
        </>
    )
}

export default AdminNavigationBar