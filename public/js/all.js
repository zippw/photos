const photos = [
    { link: 'https://sun9-66.userapi.com/s/v1/if2/vdUcmcQldn9Rtt_W_mRfXt9kmYyX8xmfQUYsykdQzsv2hT42y1mKvrC6who6r5l2JjS0I0fA1egyCYJH4UOanL-N.jpg?size=1200x1600&quality=95&type=album' },
    { link: 'https://sun9-85.userapi.com/s/v1/if2/w2QfNYnWUR7Z8NYlTnFhldk802ymXXUpebEcPZao6a-F-5MOroOtpYkmOgb1b8yYkem6R8hMKU-0HGOPlhuCV4jh.jpg?size=1199x1600&quality=95&type=album' },
    { link: 'https://sun9-54.userapi.com/s/v1/if2/Y7Gpx7zhdcNViQkvz0jDVSmBcWnyQo0ZUmP061glYRJZjdEu6jcuYMT9y9Yvf4PDKAOG06WTaWgpwLPRjQBXR9WM.jpg?size=1200x1600&quality=95&type=album' },
    { link: 'https://sun9-70.userapi.com/s/v1/if2/tu1haGC0N6SxPsaIPjVBZHJ7jsvnq05wHAyX3COPFcggs_DknEmPaX8gdpBD7LAo29Yi1YVPeVtjTG3Ywt5-osCI.jpg?size=1200x1600&quality=95&type=album' },
    { link: 'https://sun9-14.userapi.com/s/v1/if2/N3yFx2zjjBelw1BgA4dDwhbjQAG1HDTp5QyOXQvUOCYl5zv7ZOrYG0jLPY6gwgoUb-fy-BmCWZpVy_yWlC5ch6i2.jpg?size=1600x1600&quality=95&type=album' },
    { link: 'https://sun9-87.userapi.com/s/v1/if2/GE-Z1nDYrAWFKc-XbvrU40I-YvX3j6O0DjGqo3IwCGdc5v2-cTNLNAUflMW79TzwG_78LrmDsMrJ2_Jb26CEdOJ7.jpg?size=1600x1066&quality=95&type=album' },
    { link: 'https://sun9-81.userapi.com/s/v1/if2/iM0QZk4bTBG2gr6qmCMyI7knBEPkfXYI9yG9ArQ-1bD_Xv9DOsL-3qQBTNCsiZDow3bzQPB0jbs32o1dsqASVNIU.jpg?size=1600x1066&quality=95&type=album' },
    { link: 'https://sun9-85.userapi.com/s/v1/if2/CNMDpqL8kenTHYfAY3f5tgNuT6KSmQsGgWgg5NxcWGjSg1TxXsguGxrtsgScV8WZlh1i6yGOVnK74hAeGG2tULGp.jpg?size=1600x1066&quality=95&type=album' },
    { link: 'https://sun9-28.userapi.com/s/v1/if2/l_1t7pS-gmZDW82Vpx7RKJSr6SCZO8Xs8XkIKbMd3FaCRevZkJmhDTwgngjZ6rQMjbUEixoFnWjHzl_HI04fIPWI.jpg?size=1600x1066&quality=95&type=album' },
    { link: 'https://sun9-68.userapi.com/s/v1/if2/42qk6YtQaXwDKT9_2HV54Z7BP8GfcW6mfxUaeMhat4zvA5GjgL7MHT8HzNkV03l8F8MSikizLO_P0F_PCOOlKySi.jpg?size=1066x1600&quality=95&type=album' },
    { link: 'https://sun9-81.userapi.com/s/v1/if2/sOaXrygNSL-qd44bnP5lxPxkFOGA-bZqx-0fTHao5iAYPRuck9CdlkGF05ehusrxsNYO-6rLNQ10UrsJXNFnic0Z.jpg?size=1600x1066&quality=95&type=album' },
    { link: 'https://sun9-77.userapi.com/s/v1/if2/yZ5oxLVG1I9qo4jBGjYG2r30695osxjFw11ZejU-rwWs2w2h5oxHPClLGuuZ-5r0qKmYjx0T_HBQ0hktZN39jO64.jpg?size=1600x1066&quality=95&type=album' },
    { link: 'https://sun9-8.userapi.com/s/v1/if2/gV-NTVf4eKXFpo88rX16voGvOJmvw_lR2CCChUBKTiPiRdlSkisuU03Rg0OYxXpE-4jd-vD0_kZompckOkgNQ0hA.jpg?size=1066x1600&quality=95&type=album' },
    { link: 'https://sun9-16.userapi.com/s/v1/if2/VuYwM2oq2Bn_Gq5d5ZIw4SPLvTHmPgTW4KKBy7qeRN4Hb8uMfHfm1iTTjASabnYJiXelfSrTfitBh2Wz9Sp6FKo0.jpg?size=1080x720&quality=95&type=album' },
    { link: 'https://sun9-53.userapi.com/s/v1/if2/AACWkD_Ul_cgV-O83SFv46_L2nmMjz886tpXr6prLriXlcAK1su7BkB6jxEisW1PeC_4eUGOCv_pQL-MqZjeT8LA.jpg?size=1066x1600&quality=95&type=album' },
    { link: 'https://sun9-9.userapi.com/s/v1/if2/_xvG8Yqp2M61_iWeJnWDdHihu0xB4gZctZxRhpg5zEdlJ6uVYBnJ74QSX7B80j5dnnqyDaVWYpFeLVy7sw2Dxkd_.jpg?size=1066x1600&quality=95&type=album' },
    { link: 'https://sun9-13.userapi.com/s/v1/if2/SbPbsLN2JYWOz9-nuq6vKhQYSUV1Ay5-gyTBQhfLXFfaMgdNZkfPUe6u_bGAHDHgpQFvw2_Gm4TyJMg56RH1U7wT.jpg?size=1600x1066&quality=95&type=album' },
    { link: 'https://sun9-79.userapi.com/s/v1/if2/2hdiRnhSD-RIO1vcJc_Cwcl7IEq6Kfv0zFuzPmYT0EvqhjVp3luL-YpdCB53j5SG4SQgfp_J_eRDP2X-6e1Rtcs6.jpg?size=1066x1600&quality=95&type=album' },
    { link: 'https://sun9-84.userapi.com/s/v1/if2/5iORXeQfk4f-NZr4iJciUamTFKBnLE9JTWuy8Eng7yhEnXbhGWybnB15L3j-COuod8bXnWyrUQxKhwqdjlXhVgzn.jpg?size=720x1080&quality=95&type=album' },
    { link: 'https://sun9-78.userapi.com/s/v1/if2/PFEC1Xc55Zk0Xm2mYFeFodUPiy2QIRzl-i7VuGnMIjH0spGrhirvAQdXfgSu-S_TO6qL6Ns_6EH8uYLXBoVrfIFM.jpg?size=1600x1066&quality=95&type=album' },
    { link: 'https://sun9-44.userapi.com/s/v1/if2/y7hcUehKjZnL0Ux6MIY56Rvvwyr7jIQOdkNlc8qsNPn913rpv8oFhnwr36EDWcOlM-2LASNuyVX6HHXcWUGlk-pz.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-80.userapi.com/s/v1/if2/Vp2MhebOSX5aixe1hmxG_WrklDpYBPTpGhOvaJ1zpz568db62Xjyx0yrIPCOTq1DmKwZRoAKi095SD_cXnyriIIu.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-25.userapi.com/s/v1/if2/2QVM-eFfhpQb1T6DZ2BVJcpg8BRS86XPXS6HbEp6eoJ8Bj3imxFzSGFQ4XDiZIGMtIruNkicEfUErzunlXfMJ1Gh.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-81.userapi.com/s/v1/if2/xIs7UBooL4opFbhl8RKDFH-L0FyHUVXzWZt7IakS_3bd9dVeBWYQgPkg2wSp6HGInbApBZY8IQeshlSOzVd9ysMV.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-50.userapi.com/s/v1/if2/WAVf1dasrssUKiuiC9tntuWCTSO87vielnJfzwGrjf1dYuwqTjBsqvKRk1KsIlDbmLveeFztZHCEY01BXkulrFbl.jpg?size=664x1080&quality=96&type=album' },
    { link: 'https://sun9-18.userapi.com/s/v1/if2/bZKSLDyMrlvheWlTXpH4C_6eN5GAN0oSxEXsKUu9XiiRvxlSJLlM99WLMgt511djQEihBYoyJL3H5DtQyO8efZq-.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-3.userapi.com/s/v1/if2/0apvnygKayvq014XxbReA-R32GLKrG_22mpmTCEyIpqs4D_1dniMfsoZ5ExZBgVRmkybn-dCCU07gyHQ3Rw50niK.jpg?size=1066x1600&quality=96&type=album' },
    { link: 'https://sun9-36.userapi.com/s/v1/if2/gDvDLN2kK8bLqmDwP4rnnYDs1yOO_NjRE02KwkWcrNZo0PnjtdcEPHUL4Z_qNpnXaFnPZBnelocBSIkq46I6wn9E.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-67.userapi.com/s/v1/if2/L5Ou1mv3Z99aBIhcHIuGXAYRwoRbDB61JoBeM9EDeM-d0qvgsg3uoyRVz3eKYnkG9uvF0NFxd-27sUhur4U6-ZCj.jpg?size=1066x1600&quality=96&type=album' },
    { link: 'https://sun9-6.userapi.com/s/v1/if2/Bc4rB4oJkTkGYCgGP7Zo37vUyWkAsMdsetIz85p-GGc4ZfbPURKiBq64oaQDKzfl3wfCida2DH0SmSGiIzcim5fh.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-86.userapi.com/s/v1/if2/ARi71JqbVGfEosQ7l8lbYFBJSMt2Sbrj89R027DSjM8KE2K5yFicMRRqy8sRaaupDbMliZV5d20Jz643Ysj3NCK5.jpg?size=1066x1600&quality=96&type=album' },
    { link: 'https://sun9-60.userapi.com/s/v1/if2/YxceJt1fM_I55dEjnWbrOeBBNYgbMyKH4UPEwC_T3QCIjq3gyYqp2taar0PfMLYV2LQqJoVYBfRI0ioPgRi_3ywy.jpg?size=720x1080&quality=96&type=album' },
    { link: 'https://sun9-37.userapi.com/s/v1/if2/TdW3x22eNZGKCaytoYP1lpdu5-9B5s98sSkZkfyOIMN-JbnCBNkw_tGubhqNiJpvkhcN9uDL_CR_ydzYfm_EbiSu.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-59.userapi.com/s/v1/if2/lHuIdu5xs6U5Xw5z4IPcL3nN5kk0vmPZKbEfoMkD05MYjUSvE2WeVdZ3o9tKKStaKQ08Z2gjyGurH9gKvybB123J.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-12.userapi.com/s/v1/if2/NLzg4lda7q5vw3HFbBiZUwdwTLiaqHoFVwlV4BAeJcVork4KGdIQrWCGSC2PicgoJ_--oOouZE-qlRL0ClL7SXIZ.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-39.userapi.com/s/v1/if2/JNBimcLBkWF4X3cQaDBpjBT0lA8u7XYfe9wkNMvGiFNDJD8mMryNPesiiwt2E8LtKH8CTqPOo3xDpqLOysXXtt5g.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-13.userapi.com/s/v1/if2/mbg4_Vs_fzr4vxIhK_2x9YfajJvgT8RuerHhXNxTkbDyM5Qwy0LgBM_kIgYao4X5j0c10V8mjKAP7pn4J8HnL1FN.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-29.userapi.com/s/v1/if2/QRz5qPaJVUID02j_VCzRfqx7RcZzMIJFQkovsXh3KpAMiOh5OOQyujhOj2e07mIUCUqHHFoglm_mov_-awEco1IF.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-23.userapi.com/s/v1/if2/Ns_P1V6vpxNlZ0_r3Y0UjTBGVovLn6YxojtmHV39PMswALdirLgESLyrChXLn-FNKfi-U9hL2kUcvibyxTWjRIkL.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-57.userapi.com/s/v1/if2/o_XGnXKYmJ-TIp16D20fcQkN00Rnqc3BXT866mZQ8coGUNPqba0wRcyAqXuqQJ_-pwYc1mczurP5F-Mmb5rvyj1T.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-12.userapi.com/s/v1/if2/fzNTIykFJVVGWDIK0l8Z6wSByU0hLxJyq6B_RgR_jt6g3bhhiL9T53n30sEGoxv7NLk5vMGyu5Eyn8JBeQuj6g7n.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-86.userapi.com/s/v1/if2/hK9o3ZwT4xF2gG60fDx1F9PVDlymWF9DDhVlvrWPkM8I4Q6p9Nc9RorXbm2x26RjIdRfzybQLO-1mpMT-W_eQcH3.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-30.userapi.com/s/v1/if2/e7CfkvHSyrDbvIpQdopImvRrsg4bES5GPULhSBnRNu-e6jqeNQEvPQLPYemNV22AukOY2VZjPWkIK4rRrMMSKwLv.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-79.userapi.com/s/v1/if2/Cnf7pQeeBKHi9UL2G9BDbkqtYExxhN99RxafOQ0iAPXhEvTh86Z3_hfXiuKa19QUQd4ibpXbKfDAOWVCXfqHRcD0.jpg?size=1066x1600&quality=96&type=album' },
    { link: 'https://sun9-45.userapi.com/s/v1/if2/L7rWejmtQ7EPeiVO8gW1TE7KbUm5EviPtJp6xU00BSaadaim6Wm9sKRxrc-T6IRza3NbKoHoRu_rqarLwMKFhPRv.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-53.userapi.com/s/v1/if2/pDZNLtkgisdvbe06yRmZFrtkckALbsilfZsAiGE7EVCCVyiSlUsFxwtaqST2RHzIpiTeVXFOQf2D22o3MTpcEiGc.jpg?size=1066x1600&quality=96&type=album' },
    { link: 'https://sun9-13.userapi.com/s/v1/if2/2iju6YsKD-hYmL6AhEoNbe91j76p3IPN45uwFC7PvoqmrjbU-DzHlJ2mfzOkB8wuGIqI2OZlq9tuXlAIq-hYntvs.jpg?size=1066x1600&quality=96&type=album' },
    { link: 'https://sun9-32.userapi.com/s/v1/if2/oMndXlJ7okqSGV-AsEQDY1YyScOal0HLsa0OCl_o8ceGBwcPWzSgfGnbv9GHNUGMAdUsv4GDX8jPhOBwdXmAWmLU.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-86.userapi.com/s/v1/if2/AQXCAezbru8s3LOHNBkmjt2XbxtPMAi13eXGMvEqDZPU_vLim7ook60iNLbocQBeoi6nOlaKksVaTcUUPOE5XXFz.jpg?size=1066x1600&quality=96&type=album' },
    { link: 'https://sun9-85.userapi.com/s/v1/if2/_rKiagCA7rIBCU7c1hTvkyLqgWLfmuAvA2kupuZjda8fvBuhLRzzf2IjY1BTEgG4PJJe4Gq1m4xUrdqfTtAe3Jl8.jpg?size=1080x772&quality=96&type=album' },
    { link: 'https://sun9-28.userapi.com/s/v1/if2/y2JTKaS855-35PqFAnL9J_URrPaCjnvlj2-I7Lgc-mlbFIWgiAZiDSInlSjqBlESETnm5tlcKaLCW8D3ZOJYrv-8.jpg?size=1200x1600&quality=96&type=album' },
    { link: 'https://sun9-30.userapi.com/s/v1/if2/RPcUxoVU_9eWs4VzsdFlFlMV8XbVRBrFSAL0JGpl97DW7uO23P8GhfwD2j7KAqkf0t5_2CkfmkNmEjdK67FsHH5U.jpg?size=1600x1200&quality=96&type=album' },
    { link: 'https://sun9-76.userapi.com/s/v1/if2/e_2Mo_k7N5f-II439XjhclgLeqnTUcHqOX2podFppbdHwLfm_da8yq74q1beK22RQfjPRP0ZPPP48fACVCenD9Qh.jpg?size=1080x608&quality=96&type=album' },
    { link: 'https://sun9-85.userapi.com/s/v1/if2/Ct4Mzq4Y7liTlBSuGly4pl_dK139q119nZWpMTLxkRwbsdVxQI-B1-uqCzuD8G6e93-3Inwg_-vLHijw9M-RjwTX.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-47.userapi.com/s/v1/if2/P3TZekbKEV7WnQ2Cy7zsPpFCQt7ZeIi4mEyzIPALrEixAA29h7GLUZYgOrDY0oofpYk3_KtrRENtx8YSHySrCbfF.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-46.userapi.com/s/v1/if2/U2hyEMQByzmHm6VslPBm6UBiRGTVtfcjQ-C-QNysp_PJlAUQU6TY2VfsqxAo5R8Maj0H-oB4FLKUKfr6RO4uqNOC.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-79.userapi.com/s/v1/if2/96ARdvTbe-G8BB5XAO4hZYn1tNopXJ9rcqBurFeI22biUwaAllMMvUwy9xajf9q51QENauauVmFt2r28V-A8wvUl.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-60.userapi.com/s/v1/if2/f3HtTSoubRgYqT2qI5ZiXmZMUJZfeLITrgjmPwPFm2GhTWqpAZktqYDyqBnrsG-wHZpAophkoDNTNmn3xU3SDtJb.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-20.userapi.com/s/v1/if2/4brF4bJ5FzJ_vauz_ireta8F4YVXMCCSSxiJR6TGXwOBf3blcbnKPHi5Fgs9y40cmzKMzIlgTgpbk2KQXwVRVgv3.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-30.userapi.com/s/v1/if2/vYU1_JhdZNmnx3m4JodYYYNMjnH_fxO-2QAxZJZ2zwmajhviRfkBpY45CVGHG2_NzrZ5vAy62ne6cwA4gfQoCm6S.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-84.userapi.com/s/v1/if2/RUaMtogaPsBFZO-ciE1c1WUpDGBhy4MEzPJ1Nkak-_B-UrfP9XLfZw3gL2NLVToG-9lsV6CNffcO03Wj9oO-r8Ig.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-71.userapi.com/s/v1/if2/yW5fluiqS20jfSf_LoGhtAAhLKaxN6LVSdOxibwcMRFnKGP2tM3LzTkVLYyf89kSG42-lDSd1ulqPYbuE4pwHD5t.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-58.userapi.com/s/v1/if2/zQmRrpY3Mlh9iwFro6zJTR67mz4CRC5tRCjRiPk9J7MIdX4Bbynp6mR4QgDneUPmS6SgXw6nwi3Vd3ValeQtsWD3.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-8.userapi.com/s/v1/if2/T0Dvx6CK6cWYwKN4yTA6Jibk-JNNCmjIcE9qbneLGCetBcTA7CEmLQ9C_keEoZSSdYPNPVc-2sGLao_a3bwgvxVV.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-75.userapi.com/s/v1/if2/xR0Yn1ed_YHnbdWstrCLgySUiwGQ-fzLOagnP2JFpKyXelHAfXMvOt3t6io3opMwvXFhWOGrk5QT0wpSZnF7kwXL.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-14.userapi.com/s/v1/if2/KM8giaktbNoMgYpAmabH2u_AR5ueIiJbbmSjdAVun5CKELO2DoHOI0fQ0uDhOmuUk5DIV9GTTR8h4QJff2NHIx5o.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-40.userapi.com/s/v1/if2/JAu-UJyJiNptoIyY8ZAY1ws41jbKQ56HCg66tbDfwbfsibZ-Y_rAWGO_6XtZyEnRErzWDQPdh7oEuL4846TDSKRX.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-86.userapi.com/s/v1/if2/baGHOPmAThrcDZ6ssLSX7tPKXfIRwJzgzuzqYO2OsKEBlf_1Uq_jAyxq0dEulbpgNaDrbFZ94wCaWuM4um29fA8S.jpg?size=1066x1600&quality=96&type=album' },
    { link: 'https://sun9-77.userapi.com/s/v1/if2/y51RO_OEY4y6MT0Ezam4l95vCPqe1PlExFIApJPGNNljuV-4pwvUHMbvD3wyD1e9-EHVzUU3rPGwSrbJyKa4C-AK.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-18.userapi.com/s/v1/if2/HDBCK3OEx1ik59EoJo7lsPf-sL-Vq2fqRbbLyEdoTocxg-cQ6zURVJX7tZv6ce80W3DYjE4Rrd01FpKE9xq_ufUm.jpg?size=1066x1600&quality=96&type=album' },
    { link: 'https://sun9-40.userapi.com/s/v1/if2/pdltcqfOPOQIb7brDlWRN2XV5CSX9KH22XH66JNNz_zY8GJ36DhJBAqV7Y8XjUPhZKzkY9e5GsWuXHETHlfupG0E.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-56.userapi.com/s/v1/if2/mGtt5O_wPgQ0YBPmuTMw1747BuiEBTo3WlQXupriEN3hu5rwF9bI4UbtGiqiIimVTYJZ4Y2LwWbRKab4c2Bmw6ka.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-75.userapi.com/s/v1/if2/8tfV4n9xCYMY6_P9VBHG1rWkuTAW-2LgImXLH0bm_6Jt9hUTn98TXhNfojArGCbIOTYXlWrwRdQaEFHxFw0Up7tW.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-77.userapi.com/s/v1/if2/QmPp_89GaEw_S6bvgP6fJ5QAaKJfKODBZbjICJg5RS-sDwY3cqWlUiPtUmsVd0A7nj689p6OvfwhiZXwB74pOMxs.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-42.userapi.com/s/v1/if2/XSO8QPxw-kfGbc1agd286AvvKwuXw11TFUZWTQmguelG8ktPpN4N8ECmnPp13El-CFFKYXH_5Ez27ideHIFNVOHh.jpg?size=1600x1066&quality=96&type=album' },
    { link: 'https://sun9-66.userapi.com/s/v1/if2/stHbE-w2tUiItwf9TMST2p3DXjcVKOk31s2oJ6it5a3LVP23R_YSeDSLybKLEkEMy8we1gfnm14Uvl3q0rmhG0IQ.jpg?size=1600x1200&quality=96&type=album' },
    { link: 'https://sun9-87.userapi.com/s/v1/if2/Pt9lok4qTgds3UlpCgGTGbFhn34vfSCTF7kjXhI8zjYr2_JTGSNfi4H8GG_IdepYQh3mlx3TlE8obkn_6jcR6Ub4.jpg?size=1600x1200&quality=96&type=album' },
    { link: 'https://sun9-37.userapi.com/s/v1/if2/lkzbm32ojM2MIJu6pTcjYr8OdKiM2Z1vIu54vzk43wrEcaNX8UgZyx42z_2mWvu9HA6lWfyndj5RRkutZBdN2hei.jpg?size=1600x1200&quality=96&type=album' },
    { link: 'https://sun9-81.userapi.com/s/v1/if2/gaWEFDFyHsZCG3z-9klliGnnUJi5HdGvSeV-I4p_HDXBh0Au9zpywoaMsPU1WSHSQiJIrebQi_on1QkWDrM6GaXT.jpg?size=1200x1600&quality=96&type=album' },
    { link: 'https://sun9-66.userapi.com/s/v1/if2/zNVcDrc312p87hJmzurry6XxyQMpp_Z40dxN1YEqYRRJCqhRjizwCtoTyqk2hosCh4FP0OgFAg548RMjBTP1R0nI.jpg?size=1600x1200&quality=96&type=album' },
    { link: 'https://sun9-87.userapi.com/s/v1/if2/8meN46Yw9Fdwcr4eafEKpcy92sypID24Gbta0BEShDIOzMaxPMJzUcsE0N5Hal3ms-0034SOyEAFLq-0AEJoW5lk.jpg?size=1600x1200&quality=96&type=album' },
    { link: 'https://sun9-29.userapi.com/s/v1/if2/4dAT0N1L0w_WHv-Wtx9nq84Ar4AJl9F8-MAh7w5x99wXw5JOSh9wyvDujHGyJ1yG5YEJOli_IKsR0ap5nQM1pPtG.jpg?size=1600x1200&quality=96&type=album' },
    { link: 'https://sun9-21.userapi.com/s/v1/if2/p8pbtZpiV44_HqlPnztR5QT4f82_S5lyJMAbrVOo7Ot_k9wShO0uOFX2o89GLh2dX7WOruRsTKclFR9sGOqaPBym.jpg?size=1600x1200&quality=96&type=album' },
    { link: 'https://sun9-22.userapi.com/s/v1/if2/ulpQX7w9hLFxVabMCcGQ-QheC60Jjk8fjcNkyzc37x-v_efY7TOGUcJOMPCIwYpZP2UAbStZY7A99-ugwhX_mtHE.jpg?size=1080x792&quality=96&type=album' },
    { link: 'https://sun9-71.userapi.com/s/v1/if2/hVR7p3j3c_OoeGM5L4CDN5sum4xseyPFH_Zg7JSkh2nVEWnQ4trV1p2uF_sOrCpEqaJj2TWYpdhGF7RrY4t7aMLe.jpg?size=1080x806&quality=96&type=album' },
    { link: 'https://sun9-79.userapi.com/s/v1/if2/k_E7KZ3Ab1pl6bK1UtmuLt6v2pu_JgMjknCaqvS6fU3KchOzPMcQKLIQdrd5FL7LA-ufMhk7mCYGErA5gEWthJBY.jpg?size=1600x1200&quality=96&type=album' },
    { link: 'https://sun9-74.userapi.com/s/v1/if2/8cM-fesEggeZFSALQNAa82TJ8_y_RvoRsb1KwplI_Z2kio4t4FLNpCfcE4hyHv9iS98QCkDMnXAEsGaYNo85Yccy.jpg?size=1080x792&quality=96&type=album' },
    { link: 'https://sun9-41.userapi.com/s/v1/if2/YKWVkJOjB3AiGC89if8yeeRUzUv9zNAsm4DcohpktutvXgM03uNeuwavjk46MYJjDsrdyV0SOz7tgMybUOzm4TyP.jpg?size=1080x787&quality=96&type=album' },
    { link: 'https://sun9-25.userapi.com/s/v1/if2/KzJP9gaWntMkgqK6bC0vilKHPfuiUcLJrYiT0kIEvUuo7t-IyvF2lwJV7pwX02Dyk-w3jC12-INrHLo7vR87_o4b.jpg?size=1080x775&quality=96&type=album' },
    { link: 'https://sun9-79.userapi.com/s/v1/if2/4Xq6LPqGIfUmEg-_7s-DfEUmmOiMlziQnT5Tdc7lRiXudT506rIo3LErUIRS4FmFxG3YGJ4R8AOYYD6ruWXpWqLN.jpg?size=1080x1270&quality=96&type=album' },
    { link: 'https://sun9-75.userapi.com/s/v1/if2/xVncHxCSjWTF5JKUbdyyO6RyQEqytn51hxRd0NGMpIlfTjRH6Rxj4oTPEZeEs6crJ8f4xVBC_aKS3DOZ2hrIIeyI.jpg?size=1600x1200&quality=96&type=album' },
    { link: 'https://sun9-34.userapi.com/s/v1/if2/CkrpY_DDIqwvk2jqZr0aSErz0g32KgMbOglg4c-51ISLBdYH7EYI_Qa2pfxDhEikgKdFhcyv-fbZG4d80nmbohzL.jpg?size=1200x1600&quality=96&type=album' },
    { link: 'https://sun9-6.userapi.com/s/v1/if2/zSNWpT-vhWoJFgcjSFN-bf_jULe0ci5h3No_SUOdVKder0Qs28j6m_mCqEmVDtJToB_0XLf9UmiSJDPGIZSTvG31.jpg?size=1080x811&quality=96&type=album' },
    { link: 'https://sun9-62.userapi.com/s/v1/if2/P-bsWswq_iLfqtAkCgbSPfLJu2floTkPKLyl1_mGXyFTBRUS80fPS6TIw6_Q5ZATFLqIlRwdgnOzloR3zyGSfIr9.jpg?size=768x1024&quality=96&type=album' },
    { link: 'https://sun9-16.userapi.com/s/v1/if1/kvOIDlGz2VZ3uLLp2RBnBveUcgFEVn1t6HZBkfYx4yqlDAI3qbkPrsu17I0ThR4neETrKXDf.jpg?size=780x1040&quality=96&type=album' },
    { link: 'https://sun9-9.userapi.com/s/v1/if1/1OyyHGWMFefAJdrtWMIKcEsPt8HwZ3d71clrweQb5N943-ukBl7HfOuYuBopqiKLRTlnl_z3.jpg?size=1156x868&quality=96&type=album' },
    { link: 'https://sun9-34.userapi.com/s/v1/if1/hoeGvyERPj7bXCcomEmgmKkQAO6-aA1GQhTgCc5tOEoPd9l0Q757SV69CE1PdFmDFjKZLQNy.jpg?size=1080x810&quality=96&type=album' },
    { link: 'https://sun9-30.userapi.com/s/v1/if2/qJJVmzRCsAI7m9C1h4lPch_qYFZSJkEKG0Vxh0tDC08jzdEMdmLMLEy6h9Ky-jvuJYkSaA2-JXGoD4f8wbS3vG8h.jpg?size=1080x810&quality=96&type=album' },
    { link: 'https://sun9-52.userapi.com/s/v1/if1/lX3Q_9zpFDNMnhmJs-25LzMjZHuP04SC3SJXAmT7mkJhvfhD01rWPLCB_SXUgH2IULl-Nv9u.jpg?size=1080x810&quality=96&type=album' },
    { link: 'https://sun9-49.userapi.com/s/v1/if1/z-9DZD71egcyU9JZKrkdiX3MRh95Y8X-nbt_bwSppGgFNTuIa3n5gVOmfaedVZn8Y3Go0LrF.jpg?size=1386x1040&quality=96&type=album' },
    { link: 'https://sun9-24.userapi.com/s/v1/if1/DNJh20TIZx8iG0CK4YqBPQt-nGC-9tpQrUuWm6IUbrLh572amO-a40VbkpuTY_9cVPEgxscO.jpg?size=1386x1040&quality=96&type=album' },
];
photos.forEach((element, i) => {
    $(`<img src="${element.link}" loading="lazy" data-cursor="-opaque -lg" class="lazy photo" data-src="${element.link}" style="width:100%">`).insertBefore(`section.btn`);
});
document.addEventListener("DOMContentLoaded", () => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        mobile: {
            breakpoint: 0,
            smooth: true
        },
        tablet: {
            breakpoint: 0,
            smooth: true
        }
    });
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) == false) {
        MouseFollower.registerGSAP(gsap);
        const cursor = new MouseFollower({
            visible: true,
            speed: 1
        });
        $('[data-magnetic]').each(function () { new Magnetic(this); });
    }
    window.showSidePanel = function (burgerChecked) {
        if (burgerChecked == true) {
            anime.timeline().add({
                targets: '.navbar .menu',
                duration: 1000,
                translateX: ['100%', '0%'],
                easing: 'easeOutQuint',
                endDelay: 0
            })
            anime({
                targets: '.navbar .menu .container .inner .colums .items div',
                duration: 1000,
                opacity: [0, 1],
                translateY: ['10px', 0],
                easing: 'easeInOutQuint',
                delay: anime.stagger(70, { start: 0, direction: 'reverse' })
            })
        } else {
            anime({
                targets: '.navbar .menu .container .inner .colums .items div',
                duration: 200,
                opacity: [1, 0],
                easing: 'easeInOutQuint',
                delay: anime.stagger(50, { start: 0 })
            })
            anime({
                targets: '.navbar .menu',
                duration: 1000,
                translateX: [0, '100%'],
                easing: 'easeInOutQuint'
            })
        }
    };

    window.addEventListener("load", function () {
        var box = document.getElementsByClassName('photo');
        var btn = document.getElementById('showmore');
        for (let i = 10; i < box.length; i++) {
            box[i].style.display = "none";
        }
        var countD = 10;
        btn.addEventListener("click", async function () {
            var box = document.getElementsByClassName('photo');
            countD += 10;
            if (countD <= box.length) {
                for (let i = 0; i < countD; i++) {
                    box[i].style.display = "block";
                }
            }
            await scroll.update()
        })
        var textWrapper = document.querySelector('.ml16');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline().add({
            targets: '.preloader',
            duration: 1000,
            delay: 100,
            translateY: [0, '-100%'],
            opacity: [1, 0],
            easing: 'easeInOutCubic',
            complete: () => {document.body.classList.add('loaded');scroll.update()}
        }).add({
            targets: '.ml16 .letter',
            translateY: [-100, 0],
            easing: "easeOutExpo",
            duration: 1000,
            delay: (el, i) => 30 * i
        })
        anime({
            targets: 'header.photos__title .separator',
            width: [0, '100%'],
            easing: "easeOutExpo",
            duration: 1000,
            delay: 1500
        })
    });
});