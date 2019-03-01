import React from 'react'
import { connect } from 'react-redux'
import History from '../history'
import { selectInsurance, fetchInsurance } from '../actions'

class InsuranceList extends React.Component {

    constructor(props) {
        super(props);
        this.props.fetchInsurance();
    }

    clickHandler = (prop) => {
        this.props.selectInsurance(prop);
        History.push('/Insurance');
    };



    render() {
        if (this.props.insurances) {

            const list = this.props.insurances.map(p => {
                return (
                    <tr key={p.cod} onClick={() => this.clickHandler(p)}>
                        <td>{p.cod}</td>
                        <td>{p.insType}</td>
                        <td>{p.objSegurado}</td>
                        <td>{p.username}</td>
                    </tr>
                )
            });
            return (<div className="col">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">codigo</th>
                            <th scope="col">Tipo Seguro</th>
                            <th scope="col">Objeto Assegurado</th>
                            <th scope="col">Usuário responsável</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </table></div>
            );

            return "";
        }
    }
}
const mapStateToProps = state => {
    return { insurances: state.insurances }
}
export default connect(mapStateToProps, { selectInsurance, fetchInsurance })(InsuranceList);
