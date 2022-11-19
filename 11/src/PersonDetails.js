import React from 'react';

export default function PersonDetails(props) {
    const p = props.person
    const add = p.location
    const name = p.name
    return (
        <div class="container bg-info">
            <div class="row mb-2"><div class="col"><b>{name.title} {name.first} {name.last}</b><hr></hr></div></div>
            <div class="row mb-2">
                <div class="col-3"><img src={p.picture.large}></img></div>
                <div class="col-9">
                    <div class="row">
                        <div class="col">Username</div>
                        <div class="col">{p.login.username}</div>
                    </div>
                    <div class="row">
                        <div class="col">Gender</div>
                        <div class="col">{p.gender}</div>
                    </div>
                    <div class="row">
                        <div class="col">Timezone</div>
                        <div class="col">{p.location.timezone.description}</div>
                    </div>
                    <div class="row">
                        <div class="col">Address</div>
                        <div class="col">{add.city} {add.state} {add.country}</div>
                    </div>
                    <div class="row">
                        <div class="col">Email</div>
                        <div class="col">{p.email}</div>
                    </div>
                    <div class="row">
                        <div class="col">BOD</div>
                        <div class="col">{p.dob.date}({p.dob.age})</div>
                    </div>
                    <div class="row">
                        <div class="col">Registred Date</div>
                        <div class="col">{p.registered.date}</div>
                    </div>
                    <div class="row">
                        <div class="col">Phone</div>
                        <div class="col">{p.phone}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}