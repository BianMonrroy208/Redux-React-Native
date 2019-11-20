import React, { Component } from 'react'
import { View, Text, ScrollView } from "react-native"
import { connect } from "react-redux"

class SuperheroesList extends Component {


    uinchi() {

        let temp = this.props.superheroes;
        return temp.map((value, index) => {
            return (
                <Text style={{ color: 'white' }} key={index}>{value.superhero}</Text>
            )
        })
    }
    ego() {
        let temp = this.props.superheroes
        return temp.map((value, index) => {
            return (
                <Text style={{color:'white'}} key={index}>{value.first_appearance}</Text>
            )
        })
    }

    render() {


        return (
            <View style={{backgroundColor:'black'}}>
                <ScrollView>
                    {
                        this.uinchi()
                    }
                    {
                        this.ego()
                    }
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { superheroes: state.superHeroes }
}

export default connect(mapStateToProps)(SuperheroesList)