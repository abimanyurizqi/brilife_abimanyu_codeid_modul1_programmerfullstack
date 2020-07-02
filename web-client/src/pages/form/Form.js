import React, { Component } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import { addForm, getKontrasepsi, getPropinsi } from '../../actions/kontrasepsi';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/SaveRounded';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import Swal from 'sweetalert2';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Header from '../../components/Header'


class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {

            Id_Kontrasepsi: '',
            Id_Propinsi: '',
            Jumlah_Pemakai: ''

        };

        this.goBack = this.goBack.bind(this);
    }


    componentDidUpdate(prevProps, prevState) {
        const { data, error } = this.props;

        if (prevProps.data !== data) {
            Swal.fire(
                'Added!',
                'Your file has been added.',
                'success'
            );
        } else if (prevProps.error !== error) {
            Swal.fire(
                'Ops!',
                `Adding process went wrong.`,
                'error'
            );
        }
    }

    onChangeIdKontrasepsi = (event, value) => {

        this.setState({
            Id_Kontrasepsi: value.Id_Kontrasepsi
        });

    }

    onItemOpen = () => {
        this.props.getKontrasepsi();
    }

    onPropinsiOpen = () => {
        this.props.getPropinsi();
    }

    onChangeIdPropinsi = (event, value) => {
        console.log(event)
        this.setState({
            Id_Propinsi: value.Id_Propinsi
        });
    }

    onChangeJumlah = (event) => {
        const { value } = event.target;
        this.setState({
            Jumlah_Pemakai: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.addForm(this.state);


    };

    goBack() {
        this.props.history.goBack();
    }

    render() {
        const { classes, loading, itemData, itemLoading, propinsiData, propinsiLoading } = this.props;
        const { Id_Kontrasepsi, Id_Propinsi, Jumlah_Pemakai } = this.state;

        return (
            <div>

                <Header title="Form Penambahan Jumlah Pemakai Kontrasepsi" />
                <div style={{ margin: 80, marginLeft: 550, marginTop: 200 }}>
                    {!loading ?
                        <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
                            <div style={{ marginTop: 20, marginBottom: 35 }}>

                                <Autocomplete
                                    id="propinsi"
                                    options={!propinsiLoading ? propinsiData : []}
                                    onChange={this.onChangeIdPropinsi}
                                    getOptionLabel={(option) => option.Nama_Propinsi}
                                    getOptionSelected={(option) => option.Id_Propinsi}
                                    style={{ width: 300 }}
                                    onOpen={this.onPropinsiOpen}
                                    loading={propinsiLoading}
                                    renderInput={(params) => <TextField {...params} label="Pilih Propinsi" variant="outlined" />}
                                />
                            </div>

                            <div>

                                <Autocomplete
                                    id="kontrasepsi"
                                    options={!itemLoading ? itemData : []}
                                    onChange={this.onChangeIdKontrasepsi}
                                    getOptionLabel={(option) => option.Nama_Kontrasepsi}
                                    getOptionSelected={(option) => option.Id_Kontrasepsi}
                                    style={{ width: 300 }}
                                    onOpen={this.onItemOpen}
                                    loading={itemLoading}
                                    renderInput={(params) => <TextField {...params} label="Alat Kontrasepsi" variant="outlined" />}
                                />
                            </div>

                            <div className={classes.formField}>
                                <TextField id="Jumlah_Pemakai" name="Jumlah_Pemakai" label="Jumlah" value={Jumlah_Pemakai} fullWidth onChange={this.onChangeJumlah} />
                            </div>
                            <div className={classes.formButton}>
                                <Button className={classes.buttonStyle} variant="contained" color="primary"
                                    onClick={this.goBack}
                                    startIcon={<ArrowBackRoundedIcon />}
                                    disabled={loading}>
                                    Back
                            </Button>
                                <Button className={classes.buttonStyle} variant="contained" onClick={this.onSubmit} color="primary" startIcon={<SaveIcon />}>
                                    Save
                            </Button>
                            </div>
                        </form> : <CircularProgress className={classes.loadingStyle} />
                    }
                </div>
            </div>
            //ss

        );
    }
}

const mapStateToProps = state => ({
    data: state.addedForm.data,
    loading: state.addedForm.loading,
    error: state.addedForm.error,

    itemData: state.gotKontrasepsi.data,
    itemLoading: state.gotKontrasepsi.loading,
    itemError: state.gotKontrasepsi.error,

    propinsiData: state.gotPropinsi.data,
    propinsiLoading: state.gotPropinsi.loading,
    propinsiError: state.gotPropinsi.error,



});

const mapDispatchToProps = {
    addForm, getKontrasepsi, getPropinsi
};

export default withStyles(styles, { withTheme: true })(
    connect(mapStateToProps, mapDispatchToProps)(Form)
);