import { findByProps } from "@vendetta/metro";
import { React } from "@vendetta/metro/common";
import { storage } from "@vendetta/plugin";
import { Forms } from "@vendetta/ui/components";
const { FormText } = Forms;
const { ClearButtonVisibility, default: InputView } = findByProps("ClearButtonVisibility");



export default () => {
    function onChangeID(newID) {
        storage.userID = newID;
    }
    function onChangeURL(newURL) {
        storage.avatarURL = newURL;
    }

    return (
        <FormText>
            <InputView 
                value={storage.userID}
                onChangeText={onChangeID}
                placeholder="User ID"
            />
            <InputView 
                value={storage.avatarURL}
                onChangeText={onChangeURL}
                placeholder="Avatar URL"
            />
        </FormText>
    )
}