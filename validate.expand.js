//操作码
jQuery.validator.addMethod("handcode", function(value, element) {   
    var tel = /[^\u4E00-\uFA29\uE7C7-\uE7F3]+$/;
    return this.optional(element) || (tel.test(value));
}, "请输入非中文");
//金额验证
jQuery.validator.addMethod("money", function(value, element) {   
    var tel = /^(([1-9]\d{0,9})|0)(\.\d{1,2})?$/;
    return this.optional(element) || (tel.test(value));
}, "请输入正确的金额格式");
//中文
jQuery.validator.addMethod("Chinese", function(value, element) {   
    var tel = /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3])*$/;
    return this.optional(element) || (tel.test(value));
}, "请输入中文");
//会员名
jQuery.validator.addMethod("username", function(value, element) {   
    var tel = /^\w+$/;
    return this.optional(element) || (tel.test(value));
}, "请输入数字、英文或者下划线组合");

/*-------验证-----------*/
$().ready(function() {
	 $("#signupForm").validate({
		rules: {
			//操作码1
			 handcode1: {    
                required: true,
			    handcode: true,
                },
			//操作码2
			 handcode2: {    
                required: true,
			    handcode: true,
                },
			//操作码3
			 handcode3: {    
                required: true,
			    handcode: true,
                },

            //拒绝理由
             jjly:{
             	required: true,
             	}
				
			},
			
			messages: {
				
				//操作码
				handcode1:{
					required: "请输入操作码",
					rangelength: jQuery.format("请输入非中文"),
				},
				//操作码2
				handcode2:{
					required: "请输入操作码",
					rangelength: jQuery.format("请输入非中文"),
				},
				//操作码3
				handcode3:{
					required: "请输入操作码",
					rangelength: jQuery.format("请输入非中文"),
				},
				//拒绝理由
				jjly:{
					required: "请输入拒绝理由",
				}
		}      
	});
	$("#jjlyForm").validate({
		rules: {
            //拒绝理由
             jjly:{
             	required: true,
             	}
				
			},
			
			messages: {
				
				//拒绝理由
				jjly:{
					required: "请输入拒绝理由",
				}
		}      
	});
	
	$("#edityongjin").validate({
		rules: {
            //增减
             changmoney:{
             	required: true,
             	},
			//理由
             cause:{
             	required: true,
             	}
				
			},
			
			messages: {
				//增减
				changmoney:{
					required: "请输入金额",
				},
				//理由
				cause:{
					required: "请输入原因",
				}
		   }      
	});
    
	$("#signupForm2").validate({		
		rules: {
			//合同编号
			 contract: {    
                required: true,
                }
				
			},
			
			messages: {
				//合同编号
				contract:{
					required: "请输入合同编号",
				}
		}      
	});
	
	$("#deal_form").validate({		
		rules: {
			//合同编号
			 contract: {    
                required: true,
                }
				
			},
			
			messages: {
				//合同编号
				contract:{
					required: "请输入合同编号",
				}
		}      
	});

	$("#signupForm3").validate({		
		rules: {
			//金额
			 money: {    
                required: true,
				money: true,
                },
			//操作码
			 operation: {    
                required: true,
				handcode: true,
                },
			//回执单号
			 hzdh: {    
                required: true,
				number: true,
                }
				
			},
			
			messages: {
				//金额
				money:{
					required: "请输入金额",
				},
				//操作码
				operation:{
					required: "请输入操作码",
					rangelength: jQuery.format("请输入非中文"),
				},
				//回执单号
				hzdh:{
					required: "请输入回执单号",
					rangelength: jQuery.format("请输入数字"),
				}
			}      
	});

   $("#messPush").validate({
	 rules: {
		alluser: {    
			required: true,
        },
		username: {    
			required: true,
			username: true,
       }, 
	   messmatter: {    
			required: true,
       },
	   messtitle: {    
			required: true,
			Chinese: true,
       },
	   
	 },
	 
	 messages: {
	   alluser:{
		 required: "请选择",
	   },
	   username:{
		 required: "请输入会员名",
	   },
	   messmatter:{
		 required: "请输入正文",
	   },
	   messtitle:{
		 required: "请输入标题",
	   },
	   
	 }
	   
   });
   
   $("#newsForm").validate({
     rules: {
		province: {    
			required: true,
        },
		city: {    
			required: true,
        },
		cityArea: {    
			required: true,
        },
		propertyname: {    
			required: true,
        },
		newstitle: {    
			required: true,
        }, 
	 },
	 
	 messages: {
	   province:{
		 required: "请选择省",
	   },
	   city:{
		 required: "请选择市",
	   },
	   cityArea:{
		 required: "请选择区",
	   },
	   propertyname:{
		 required: "请选择楼盘名称",
	   },
	   newstitle:{
		 required: "请输入标题",
	   },
	 }
	   
   });

   $("#userForm").validate({
   		rules: {
   			userName: {
   				required: true,
   			},
   			userPass: {
   				required: true,
   			},
   			userPass2: {
   				required: true,
   			},
   			jueshe: {
   				required: true,
   			},
   		},
   		messages: {
   			userName: {
   				required: "请输入管理员名称",
   			},
   			userPass: {
   				required: "请输入管理员密码",
   			},
   			userPass2: {
   				required: "再次输入密码",
   			},
   			jueshe: {
   				required: "请选择角色",
   			},
   		}
   });


   $("#moduserForm").validate({
   		rules: {
   			userName: {
   				required: true,
   			},
   			userPass: {
   				required: true,
   			},
   			userPass2: {
   				required: true,
   			},
   			jueshe: {
   				required: true,
   			},
   		},
   		messages: {
   			userName: {
   				required: "请输入管理员名称",
   			},
   			userPass: {
   				required: "请输入管理员密码",
   			},
   			userPass2: {
   				required: "再次输入密码",
   			},
   			jueshe: {
   				required: "请选择角色",
   			},
   		}
   });


   $("#partaddForm").validate({
	  rules: {
		 partname: {
   		   required: true,
   		 },
		 partbewrite: {
   		   required: true,
   		 },
			  
	  },
	  messages: {
		partname: {
   		  required: "请输入名称",
   		},
		partbewrite: {
   		  required: "请输入描述",
   		},  
		
	  }
	   
   });
   
   $("#parteditForm").validate({
	  rules: {
		 partname: {
   		   required: true,
   		 },
		 partbewrite: {
   		   required: true,
   		 },
			  
	  },
	  messages: {
		partname: {
   		  required: "请输入名称",
   		},
		partbewrite: {
   		  required: "请输入描述",
   		},  
		
	  }
	   
   });
	
});
