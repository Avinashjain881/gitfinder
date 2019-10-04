import React, { Fragment, Component } from 'react';
import ReactDom from 'react-dom';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
const modalRoot = document.getElementById('modal');

export default class Modal extends Component {

    constructor(props) {
        super(props);

    };

    render() {

        const {
            children,
            modal,
            getUser,
            name,
            avatar_url,
            location,
            bio,
            blog,
            followers,
            following,
            public_repos,
        } = this.props.modal;

        const { loading } = this.props;
        if (loading) return <Spinner />
        return (

            ReactDom.createPortal(children, this.el)

        )

    }
}