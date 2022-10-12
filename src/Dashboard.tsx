import logo from './logo.svg'
import './Dashboard.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Dashboard() {
    return (
        <div>
            <nav className='navbar navbar-extend-lg navbar-fixed-top'>
                <div className='container-fluid py-3 px-4'>
                    <a href="" className='navbrand'>
                        <img src={logo} alt="logo" />
                    </a>
                    <div className='input-group w-25'>
                        <input type="text" className='form-control' />
                        <button type='submit' className='btn btn-info' >
                            <i className='bi-search'></i>
                        </button>
                    </div>
                    <div className='d-inline-flex flex-row align-items-center'>
                        <p className='px-3 mb-0'>
                            <a href="">Docs</a>
                        </p>
                        <div className='px-3'>
                            <i className='bi-bell'></i>
                        </div>
                        <div className='d-inline-flex flex-row align-items-center'>
                            <div className='avatar'>
                                <img src="avatar.png" alt="avatar" className='image-fluid' />
                            </div>
                            <p className='px-3 mb-0'>Admin</p>
                            <div>
                                <i className='bi-caret-down-fill'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-3 position-sticky'>
                        <ul>
                            <a href='#'><li></li></a>
                            <a href='#'><li></li></a>
                            <a href='#'><li></li></a>
                            <a href='#'><li></li></a>
                            <a href='#'><li></li></a>
                            <a href='#'><li></li></a>
                            <a href='#'><li></li></a>
                        </ul>
                    </div>
                    <div className='col-lg-9'></div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;