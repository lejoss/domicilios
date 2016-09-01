/**
 * Created by lejoss on 8/11/16.
 */
import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import Button from 'apsl-react-native-button'

export default class MenuItemCard extends Component {
    constructor(props) {
        super(props)

        // this state handles the quantity for each menu item
        // and displaying quantity cover
        this.state = {
            coverShown: false,
            quantity:1
        }
    }

    render() {

        const {restaurant,title,price,addToCart} = this.props
        const {quantity} = this.state
        const total      = price * quantity
        const orderBgBtn = quantity > 1 ? "#f1f1f1" : "transparent"
        const prepOrder  = ({
            customer:{
                "name": "Alejandro",
                "phone":0,
                "location": {
                    "address": "Proviteq",
                    "coordinate": {
                        "latitude": 12.78825,
                        "longitude": -152.4324
                    }
                }
            },
            order: {
                itemName: title,
                itemQuantity: this.state.quantity,
                itemPrice: price,
                restaurant,
                total
            }
        })

        const cardToRender = (
            <View style={{backgroundColor:"#fafafa", height:160, marginBottom: 15, borderRadius:2, shadowColor:"rgba(0,0,0,.20)", shadowOpacity: 0.8, shadowRadius:2, shadowOffset: {height:1, width:0}}}>
                <View style={{ padding: 10}}>
                    <Text style={{fontSize: 16 , fontWeight: "bold", color:"#9E9E9E"}}>
                        {title} &nbsp;&nbsp; {quantity > 1 ? <Text style={{backgroundColor:"#eee",color:"#aaa"}}>x {quantity}</Text> : null}
                    </Text>
                </View>
                <View style={{flex:2,flexDirection:"row", padding: 10, marginTop:-10}}>
                    <View style={{flex:2}}>
                        <Text style={{color:"#A6A6A6", fontSize:11.2}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </Text>
                    </View>
                    <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                        <Image source={{uri: 'http://www.myiconfinder.com/uploads/iconsets/256-256-b030adac9955cf87d7abe3e5f2106d90.png'}} style={{width: 80, height: 80, marginTop:-20}} />
                    </View>
                </View>
                <View style={{flex:1,flexDirection:"row", padding:10, marginBottom:10}}>
                    <View style={{flex:1}}>
                        <Button
                            onPress={() => {
                                addToCart(prepOrder)
                                this.setState({
                                    quantity: 1
                                })
                            }}
                            style={{height:35, backgroundColor: orderBgBtn}}
                            textStyle={{fontSize: 14}}
                        >
                            Add to order $ {quantity > 1 ? total : price}
                        </Button>

                    </View>
                    <View style={{flex:1}}>
                        <Button
                            onPress={() => this.setState({coverShown: !this.state.coverShown})}
                            style={{height:35}}
                            textStyle={{fontSize: 14}}
                        >
                            Add Many
                        </Button>
                    </View>
                </View>
            </View>
        )

        const cardCoverToRender = (
            <View style={{height:160, backgroundColor:"#BDBDBD",marginBottom: 15, borderRadius:2, shadowColor:"rgba(0,0,0,.20)", shadowOpacity: 0.8, shadowRadius:2, shadowOffset: {height:1, width:0}}}>
                <View style={{ padding: 20}}>
                    <Text style={{textAlign: "center"}}>{this.props.title}</Text>
                    <View style={{flex:1, flexDirection:"row", marginTop:20, marginLeft:25, marginRight:25}}>
                        <View style={{flex:1, height:40,flexDirection:"row", borderWidth:1, margin:10}}>
                            <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                                <Button
                                    style={{borderWidth:0,marginTop: 10}}
                                    onPress={() => {
                                            if(this.state.quantity > 1) {
                                                this.setState({quantity: --this.state.quantity })
                                            }
                                        }}
                                >
                                    -
                                </Button>
                            </View>
                            <View style={{flex:1, borderLeftWidth:1, borderRightWidth:1, justifyContent:"center", alignItems:"center"}}>
                                <Text style={{textAlign:"center", padding:5, width:40}}>
                                    {this.state.quantity}
                                </Text>
                            </View>
                            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                                <Button
                                    style={{borderWidth:0,marginTop: 10}}
                                    onPress={() => {
                                             this.setState({quantity: ++this.state.quantity })
                                        }}
                                >
                                    +
                                </Button>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1, flexDirection:"row"}}>
                        <View style={{flex:1}}>
                            <Button
                                onPress={() => this.setState({quantity: 1, coverShown: !this.state.coverShown})}
                                style={{borderWidth:0}}>
                                Reset
                            </Button>
                        </View>
                        <View style={{flex:1}}>
                            <Button
                                onPress={() => this.setState({coverShown: !this.state.coverShown})}
                                style={{borderWidth:0}}>
                                Accept
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        )

       return this.state.coverShown ?  cardCoverToRender: cardToRender
    }
}

