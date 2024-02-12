import { findByProps } from "@vendetta/metro";
import { React } from "@vendetta/metro/common";
import { storage } from "@vendetta/plugin";
import { Forms } from "@vendetta/ui/components";
import { General } from "@vendetta/ui/components";

const { FormText, FormLabel, FormRow, FormSwitchRow, FormSection, FormDivider, FormInput } = Forms;
const { ScrollView, View } = General;


export default () => {
    function onChangeID(newID) {
        storage.userID = newID;
    }
    function onChangeURL(newURL) {
        storage.avatarURL = newURL;
    }

    return (
        <ScrollView>
            <View style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <FormInput
                title="User ID"
                placeholder="0"
                value={storage.userID}
                onChange={onChangeID}
            />
            <FormInput
                title="Avatar URL"
                placeholder="0"
                value={storage.avatarURL}
                onChange={onChangeURL}
            />
            </View>
        </ScrollView>
    )
}