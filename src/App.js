import React, { Component } from 'react';
        import OrgChart from './mytree';

        export default class App extends Component {
            render() {
                return (
                    <div style={{height: '100%'}}>

                        <OrgChart nodes={[
                            { id: 1, name: 'Denny Curtis', title: 'CEO', img: 'https://cdn.balkan.app/shared/2.jpg' },
                            { id: 2, pid: 3, name: 'Ashley Barnett', title: 'Sales Manager', img: 'https://cdn.balkan.app/shared/3.jpg' },
                            { id: 3, pid: 1, name: 'Caden Ellison', title: 'Dev Manager', img: 'https://cdn.balkan.app/shared/4.jpg' },
                            { id: 4, pid: 3, name: 'Elliot Patel', title: 'Sales', img: 'https://cdn.balkan.app/shared/5.jpg' },
                            { id: 5, pid: 1, name: 'Lynn Hussain', title: 'Sales', img: 'https://cdn.balkan.app/shared/6.jpg' },
                            { id: 6, pid: 4, name: 'Tanner May', title: 'Developer', img: 'https://cdn.balkan.app/shared/7.jpg' },
                            { id: 7, pid: 6, name: 'Fran Parsons', title: 'Developer', img: 'https://cdn.balkan.app/shared/8.jpg' },
                            { id: 8, pid: 1, name: 'Sebastian Esquivel', title: 'Web Developer', img: 'https://media-exp1.licdn.com/dms/image/C4E03AQHXbFMwUIcepQ/profile-displayphoto-shrink_100_100/0/1516697256126?e=1671667200&v=beta&t=rDdxrdRmGRr-h-H51HYmdk6spUTaRYaEx9Vpiq6TNqI' }

                        ]} />
                    </div>
