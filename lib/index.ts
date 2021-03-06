// Copyright 2022 ilotterytea
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import BTTVProvider from "./providers/BTTVProvider";
import FFZProvider from "./providers/FFZProvider";
import STVProvider from "./providers/STVProvider";
import TTVProvider from "./providers/TTVProvider";

interface EmoteLibConfiguration {
    /** Client ID from your dev.twitch.tv application. */
    client_id: string | undefined,

    /** Access token. */
    access_token: string | undefined
}

export default class EmoteLib {
    twitch: TTVProvider;
    betterttv: BTTVProvider;
    frankerfacez: FFZProvider;
    seventv: STVProvider;

    /**
     * Emote library.
     */
    constructor (config: EmoteLibConfiguration) {
        this.twitch = new TTVProvider(config.client_id as string, config.access_token as string);
        this.betterttv = new BTTVProvider(config.client_id as string, config.access_token as string);
        this.frankerfacez = new FFZProvider(config.client_id as string, config.access_token as string);
        this.seventv = new STVProvider(config.client_id as string, config.access_token as string);
    }
}