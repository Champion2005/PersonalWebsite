import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="w3-center w3-text-white w3-padding-16">
            <h1>Something's wrong here you silly goof!</h1>
            <p>
                Error: <i>{error.statusText || error.message}</i>
            </p>
            <a className="w3-button w3-round-large w3-border w3-xlarge w3-hover-none w3-hover-text w3-hover-text-red" href="https://www.apatel.xyz">Return home</a>
        </div>
    );
}