import React, { Component } from 'react';
import Header from '../../components/Header';
import { getRekapitulasiPropinsi } from '../../actions/kontrasepsi';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import SaveIcon from '@material-ui/icons/SaveRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';


// import Swal from 'sweetalert2';
import MUIDataTable from "mui-datatables";

// import { withStyles } from '@material-ui/core/styles';
import { Button, CircularProgress } from '@material-ui/core';
// import AddIcon from '@material-ui/icons/AddCircleRounded';
// import RefreshIcon from '@material-ui/icons/RefreshRounded';
// import { connect } from 'react-redux';


class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.props.getRekapitulasiPropinsi();
    }

    componentDidUpdate(prevProps, prevState) {
        const { data, error } = this.props;

        if (prevProps.data !== data) {
            console.log(data)
            this.setState({ data: data })
        } else if (error && prevProps.error !== error) {
            console.log(error);
        }
    }

    render() {
        const columns = [
            {
                name: "Propinsi",
                label: "Propinsi"
            },
            {
                name: "jumlah_kontrasespsi",
                label: "Jumlah Pemakaian Kontrasepsi"
            }
        ];

        const options = {
            selectableRows: false,
            textLabels: {
                body: {
                    noMatch: this.props.loading ? <CircularProgress /> : "sorry, no data found"
                }
            }
        };

        const { loading } = this.props

        return (
            <div style={{ display: 'flex' }}>
                <Header title='home' />
                <div>
                    hello world
                </div>
                <main style={{
                    flexGrow: 1,
                    padding: 100,
                }}>

                    <MUIDataTable
                        title={"Jumlah Pemakaian alat Kontrasepsi Data Berdasarkan Propinsi"}
                        data={!loading ? this.state.data : []}
                        columns={columns}
                        options={options}

                    />

                    <div style={{
                        margin: 10,
                        display: 'flex',
                        justifyContent: 'flex-start'
                    }}>
                      
                        <Button style={{
                            background: 'linear-gradient(45deg, #242322 30%, #363535 90%)',
                            border: 0,
                            borderRadius: 3,
                            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                            color: 'white',
                            margin: 4
                        }} variant="contained" onClick={()=>this.props.history.push(`/form`)} color="primary" startIcon={<SaveIcon />}>
                            Form
                            </Button>
                        <Button style={{
                            background: 'linear-gradient(45deg, #242322 30%, #363535 90%)',
                            border: 0,
                            borderRadius: 3,
                            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                            color: 'white',
                            margin: 4
                        }} variant="contained" color="primary" startIcon={<SaveIcon />}>
                            Report
                            </Button>
                    </div>
                </main>



            </div >
        );
    }
}

const mapStateToProps = state => ({
    data: state.gotRekapitulasiPropinsi.data,
    loading: state.gotRekapitulasiPropinsi.loading,
    error: state.gotRekapitulasiPropinsi.error

});

const mapDispatchToProps = {
    getRekapitulasiPropinsi
};


export default withStyles(styles, { withTheme: true })(
    connect(mapStateToProps, mapDispatchToProps)(HomePage));