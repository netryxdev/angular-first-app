import { Component } from '@angular/core'

@Component({
    selector:'app-warning-alert',
    template: `
        <p>This is a warning, you are in danger!</p>
    `,
    styles: [
        `
            p {
                color: red;
                padding: 7px;
                justify-content:center;
                text-align:center;
                border: 1px solid red;
                border-radius: 5px;
                width: 18%;
                background-color: mistyrose;
}
        `
    ]
})

export class WarningAlertComponent {

}