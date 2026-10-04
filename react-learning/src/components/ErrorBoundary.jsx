import { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = { hasError: false }
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error('React error', error)
        console.error('Component Stack:', info.componentStack);


    }
    render() {
        if (this.state.hasError) {
            return <p>Something Went worng !!</p>
        }
        return this.props.children;
    }
}