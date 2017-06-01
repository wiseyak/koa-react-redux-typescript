import * as React from 'react';

export class Html {
    constructor(){}

    stylesArray: string[] = [
        "https://fonts.googleapis.com/css?family=Roboto",
        "/public/style/bootstrap.min.css",
        "/public/style/font-awesome.min.css",
        "/public/style/style.css"
    ];

    scriptsArray: string[] = [
        "/public/js/jquery.min.js",
        "/public/js/bootstrap.min.js",
        "/public/js/typeahead.bundle.js"
    ];

    get styles() {
        if(this.stylesArray.length > 0){
            return this.stylesArray.map((style, i) => 
                <link href={style} key={i} rel="stylesheet" type="text/css" />
            );
        }
    }

    get scripts() {
        this.scriptsArray.push("/lib/react/dist/react.js");
        this.scriptsArray.push("/lib/react-dom/dist/react-dom.js");
        this.scriptsArray.push("/public/dist/bundle.js");
        

        if(this.scriptsArray.length > 0){
            return this.scriptsArray.map((script, i) => 
                <script src={script} key={i} />
            );
        }
    }

    render() {
        return (
            <html>
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    {this.styles}
                </head>
                <body>
                    <div className="navbar navbar-inverse navbar-static-top" role="navigation">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">
                                    <strong>Koa</strong>
                                </a>
                            </div>
                            <div className="navbar-collapse collapse">
                                <ul className="nav navbar-nav navbar-main navbar-left">
                                    <li className="active">
                                        <a href="#">Dashboard</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div id="maincontent" className="col-md-12"></div>
                    </div>

                    {this.scripts}
                </body>
            </html>
        );
    }
}