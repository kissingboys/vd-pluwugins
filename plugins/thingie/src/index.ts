import { logger } from "@vendetta";
import Settings from "./Settings";
import { after, instead } from "@vendetta/patcher";
import { storage } from "@vendetta/plugin";
import { findByStoreName } from "@vendetta/metro";

let patches = [];


const UserStore = findByStoreName('UserStore');

export default {
    onLoad: () => {
        patches.push(
            after('getUser', UserStore, (_, user) => {
                if (!storage?.userID) return;
                if (!storage?.avatarURL) return;
                if (user?.id != storage?.userID) return;
                let up = instead("getAvatarSource", user, ()=>{
                up();
                return {uri: storage.avatarURL };
                });
            })
        );
    },
    onUnload: () => {
        patches.map(unpatch => unpatch());
    },
    settings: Settings,
}