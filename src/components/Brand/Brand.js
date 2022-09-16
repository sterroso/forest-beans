import logo from './logo-64.png';

const Brand = props => {
    const { brand } = props.brand;
    
    return (
        <div className="Brand">
            <img className="Brand-logo" src={logo} alt="Forest Beans" />
            <h1 className="Brand-title">{brand}</h1>
        </div>
    );
}

export default Brand;