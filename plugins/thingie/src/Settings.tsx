import { findByProps } from "@vendetta/metro";
import { React } from "@vendetta/metro/common";
import { storage } from "@vendetta/plugin";
import { Forms } from "@vendetta/ui/components";
import { General } from "@vendetta/ui/components";

const { FormText } = Forms;
const { default: InputView } = findByProps("ClearButtonVisibility");
const { View } = General;


export default () => {
    function onChangeID(newID) {
        storage.userID = newID;
    }
    function onChangeURL(newURL) {
        storage.avatarURL = newURL;
    }

    return (
        <FormText>
            <View style={{ display: "flex", flexDirection: "column" }}>
            <InputView 
                value={storage.userID}
                onChangeText={onChangeID}
                placeholder="User ID"
                showBorder={false}
                style={{ width: "90%" }}

            />
            <InputView 
                value={storage.avatarURL}
                onChangeText={onChangeURL}
                placeholder="Avatar URL"
                showBorder={false}
                style={{ width: "90%" }}
            />
            </View>
        </FormText>
    )
}