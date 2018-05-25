<template>
    <div>
        <div class="custom-loader" id="custom-loader"></div>
        <div class="clearfix"> </div>

        <div class="page-container">
            <div class="page-content-wrapper">
                <div class="page-content">
                    <div class="row">
                        <form method="post" accept-charset="utf-8" id="pricing-form" @submit="checkForm" >
                            <div style="display:none;">
                                <input type="hidden" name="_method" value="POST"/>
                            </div>
                            <div class="col-md-1"></div>
                            <div class="col-md-7">
                                <div class="portlet solid blue"  style="border-radius: 5px !important; text-align: left;">
                                    <div class="portlet-title"  style="text-align: center; margin-bottom: 30px;">
                                        <h3 class="h3-title"><span class="price-intervals"> {{ intervalSelected }} </span> Pricing Calculator</h3>
                                    </div>
                                    <div class="portlet-body form" style="height:480px">
                                        <div class="row">
                                            <div class="col-md-1"></div>
                                            <div class="form-group col-md-10 err-alert" v-if="error == true">
                                                <div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>Please enter number of employees</div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-1"></div>
                                            <div class="form-group col-md-10">
                                                <span class="control-label col-md-8" style="font-size: 17px; line-height: 2;">How many employee do you want to add?</span>
                                                <div class="col-md-4" style="margin-top: 5px;">
                                                    <input type="number" name="no_of_employee" class="form-control emp-strength" placeholder="Enter # of employees" v-on:keyup="changeEmpNum" v-model="no_of_employee"/>                        
                                                    <input type="hidden" name="final_price" class="final-price-input" id="final-price" value=""/>                        
                                                    <span class="help-block"> </span>
                                                </div>
                                            </div>
                                            <div class="col-md-1"></div>
                                        </div>
                                        <br>
                                        <br>
                                        <div class="row">
                                            <div class="col-md-1"></div>
                                            <div class="form-group col-md-10">
                                                <div class='info_alert' v-if="info_alert">
                                                    <div class="alert alert-info">
                                                        <button type="button" class="close close-info-btn" data-dismiss="alert" aria-hidden="true"></button>
                                                        <strong>For 1000 OR More employees</strong> Please  <router-link to="/contact-us" > <b>Contact Us</b></router-link>
                                                    </div>
                                                </div>
                                                <table class="table pricing-tbl">
                                                    <thead>
                                                        <tr>
                                                            <th> Employees </th>
                                                            <th> Price Per Employee </th>
                                                            <th> <span class="priceDisplay"> Total Price </span> </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody v-html="tableHtml">
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-1"></div>
                                            <div class="col-md-10" v-if="intervalSelected == 'Yearly' && no_of_employee > 0 && no_of_employee < 1000">
                                                <div class="row">
                                                    <div class="col-md-3"></div>
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"> Total Price </label>
                                                        <div class="col-md-5">
                                                            <span type="text" class="form-control price-format" style="text-align:right;">{{ currencySymbol }} {{ yearlyTotalPrice }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-1"></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-1"></div>
                                            <div class="col-md-10" v-if="intervalSelected == 'Yearly' && no_of_employee > 0 && no_of_employee < 1000">
                                                <div class="row">
                                                    <div class="col-md-3"></div>
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"> 10% Discount on Annual Payment  </label>
                                                        <div class="col-md-5"><span type="text" class="form-control price-format" style="text-align:right;">{{ currencySymbol }} {{ discountPrice }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-1"></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-1"></div>
                                            <div class="final-cost-div col-md-10" style="display: block;">
                                                <div class="row">
                                                    <div class="form-group">
                                                        <label class="control-label col-md-6 col-sm-6"> Final Cost </label>
                                                        <div class="final-amount-button col-md-6 col-sm-6">
                                                            <div class="col-md-6 col-sm-6">
                                                                <select name="interval" class="form-control interval" v-model="intervalSelected" v-on:change="changeInterval">
                                                                    <option v-for="option in options" v-bind:value="option.value">
                                                                        {{ option.text }}
                                                                    </option>
                                                                </select>
                                                                <span class="help-block">  </span>
                                                            </div>
                                                            <div class="col-md-6 col-sm-6 final-cost-price">
                                                                <span type="text" class="form-control cost-format final-cost-price" style="text-align:right;" v-if="intervalSelected == 'Yearly'">{{ currencySymbol }}{{ yearlyFinalPrice }} </span>
                                                                <span type="text" class="form-control cost-format final-cost-price" style="text-align:right;" v-else>{{ currencySymbol }}{{ finalPrice }} </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        <div class="row">
                                            <div class="col-md-2"></div>
                                            <div class="form-group">
                                                <div class="col-md-9">
                                                    <button type="submit" class="btn blue btn-submit">Start Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- END Portlet PORTLET-->
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class ="col-md-1"></div>
                                <div class ="col-md-11">
                                    <div class ="pricing-des">
                                        <h3>Simple pricing</h3>
                                        <p>No hidden fees.</p>
                                    </div>  
                                    <div class ="pricing-des">
                                        <h3>Volume discounts</h3>
                                        <p>For annual users 10% discount.</p>
                                    </div>   
                                    <div class ="pricing-des">
                                        <h3>Different Plan Selection</h3>
                                        <p>Monthly and Yearly billing System, cancel anytime.</p>
                                    </div>
                                    <div class ="pricing-des">
                                        <div style="text-align: center; margin-top: 20px;"><a href="#" class="btn btn-default mt-ladda-btn ladda-button " style="font-size:15px; font-weight:bold;color :grey;">Start Your Free Trial</a></div>
                                        <p>Start with a 30-day trial period then sign up for a monthly or annual subscription.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-1"></div>
                        </form></div>

                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        <div class="page-footer">
            <div class="page-footer-inner">  2018 &copy; Multidots</div>
        </div>
    </div>
    <!-- SharpSpring Form for Contact Us  -->

</template>

<script>
    export default {
        data() {
            return {
                currencySymbol: '$',
                no_of_employee: '',
                price: 0,
                intervalSelected: 'Monthly',
                options: [
                    {text: 'Monthly', value: 'Monthly'},
                    {text: 'Yearly', value: 'Yearly'}
                ],
                limit: 0,
                error: false,
                yearlyTotalPrice: 0.0,
                finalPrice: 0.0,
                perEmpAmount: 0.0,
                discountPrice: 0.0,
                nextLimit: 0,
                nextPriceAmount: 0,
                nextPriceAmount: 0,
                totalLimit: 0,
                totalPrice: 0.0,
                planAmountArr: {
                    "10": {"limit": "1-10", "max_emp": 10, "per_emp_amount": 5, "total_price": 50, "yearly_price": 600},
                    "100": {"limit": "11-100", "max_emp": 100, "per_emp_amount": 4.5, "total_price": 405, "yearly_price": 4860},
                    "500": {"limit": "101-500", "max_emp": 500, "per_emp_amount": 4.25, "total_price": 1700, "yearly_price": 20400},
                    "999": {"limit": "501-999", "max_emp": 999, "per_emp_amount": 4, "total_price": 1996, "yearly_price": 23952}
                },
                tableRows: [],
                tableHtml: '',
                info_alert: false,
                yearlyFinalPrice: 0.0,
            };
        },
        methods: {
            changeEmpNum() {
                this.checkValidInput(this.no_of_employee);
                this.calculateTheAmount(this.no_of_employee);
            },
            checkForm: function (e) {
                if (this.no_of_employee == 0 || this.no_of_employee == null) {
                    this.error = true;
                } else if (this.no_of_employee >= 1 && this.no_of_employee <= 999) {
                    this.$router.push("/selected-plan/" + this.finalPrice + "/" + this.intervalSelected);
                    this.error = false;
                }
                e.preventDefault();
            },
            calculateTheAmount: function (event) {
                let vm = this;
                vm.isNumber(event);
                vm.finalPrice = 0.0;
                vm.tableHtml = '';
                vm.error = vm.info_alert = false;
                $(".final-cost-div").css('display', 'block');
                if (vm.no_of_employee.length == 0) {
                    vm.defaultHtml();
                    vm.changeCss();
                } else if (vm.no_of_employee >= 1 && vm.no_of_employee <= 999) {
                    $.each(vm.planAmountArr, function (key, obj) {
                        vm.perEmpAmount = obj.per_emp_amount;
                        vm.perEmpAmount = vm.perEmpAmount.toFixed(2);
                        vm.totalPrice = parseFloat(obj.total_price);
                        if (vm.intervalSelected == 'Yearly') {
                            vm.totalPrice = obj.yearly_price;
                        }
                        vm.totalPrice = parseFloat(vm.totalPrice.toFixed(2));
                        if (vm.no_of_employee > obj.max_emp) {
                            vm.totalLimit = vm.totalLimit + (obj.max_emp - vm.totalLimit);
                            vm.finalPrice = parseFloat(vm.finalPrice) + parseFloat(vm.totalPrice);
                            vm.tableHtml += "<tr><td>" + obj.limit + "</td><td>" + vm.currencySymbol + ' ' + vm.perEmpAmount + "</td><td> <span class='priceDisplay'>" + vm.currencySymbol + ' ' + vm.totalPrice.toFixed(2) + "</span></td></tr>";
                        } else {
                            if (vm.no_of_employee >= 1 && vm.no_of_employee <= 10) {
                                vm.finalPrice = parseFloat(vm.totalPrice);
                                vm.tableHtml += "<tr><td>" + obj.limit + "</td><td>" + vm.currencySymbol + ' ' + vm.perEmpAmount + "</td><td> <span class='priceDisplay'>" + vm.currencySymbol + ' ' + vm.totalPrice.toFixed(2) + "</span></td></tr>";
                            } else {
                                vm.nextLimit = vm.no_of_employee - vm.totalLimit;
                                vm.nextPriceAmount = vm.nextLimit * obj.per_emp_amount;
                                vm.nextPriceAmount = parseFloat(vm.nextPriceAmount);
                                if (vm.intervalSelected == 'Yearly') {
                                    vm.nextPriceAmount = vm.nextPriceAmount * 12;
                                }
                                vm.finalPrice = parseFloat(vm.finalPrice) + parseFloat(vm.nextPriceAmount);
                                vm.tableHtml += "<tr><td> Next - " + vm.nextLimit + "</td><td>" + vm.currencySymbol + ' ' + vm.perEmpAmount + "</td><td> <span class='priceDisplay'>" + vm.currencySymbol + ' ' + vm.nextPriceAmount.toFixed(2) + "</span></td></tr>";
                            }
                            return false;
                        }
                    });
                } else if (vm.no_of_employee >= 1000) {
                    vm.finalPrice = 0.0;
                    vm.info_alert = true;
                    vm.defaultHtml();
                    $(".final-cost-div").css('display', 'none');
                }
                if (vm.intervalSelected == 'Yearly') {
                    var yearlyPrice = vm.yearlyTotalPrice = vm.finalPrice;
                    vm.discountPrice = yearlyPrice * (10 / 100);
                    vm.discountPrice = vm.discountPrice.toFixed(2);
                    vm.yearlyFinalPrice = yearlyPrice - vm.discountPrice;
                    vm.yearlyFinalPrice = vm.yearlyFinalPrice.toFixed(2);
                }
                vm.finalPrice = vm.finalPrice.toFixed(2);
                if (vm.no_of_employee.length > 0 && vm.info_alert == false) {
                    $(".final-cost-div").css('display', 'block');
                } else {
                    $(".final-cost-div").css('display', 'none');
                }
            },
            defaultHtml() {
                let vm = this;
                vm.tableHtml = '';
                $.each(vm.planAmountArr, function (key, obj) {
                    vm.perEmpAmount = obj.per_emp_amount;
                    let totalPr = obj.total_price;
                    if (vm.intervalSelected == 'Yearly') {
                        totalPr = obj.yearly_price;
                    }
                    vm.tableHtml += "<tr><td>" + obj.limit + "</td><td> " + vm.currencySymbol + ' ' + vm.perEmpAmount.toFixed(2) + "</td><td><span class='priceDisplay'> " + vm.currencySymbol + ' ' + totalPr.toFixed(2) + "</span></td></tr>";
                });
            },
            isNumber: function (event) {
                let charCode = (event.which) ? event.which : event.keyCode;
                if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                    $('.priceDisplay').css('display', 'none');
                    return false;
                }
                $('.priceDisplay').css('display', 'block');
                return true;
            },
            changeInterval: function (event) {
                let vm = this;
                vm.defaultHtml();
                vm.calculateTheAmount(event);
                if (event.target.value = 'Yearly') {
                    var yearlyPrice = vm.yearlyTotalPrice = vm.finalPrice;
                    vm.discountPrice = yearlyPrice * (10 / 100);
                    vm.discountPrice = vm.discountPrice.toFixed(2);
                    vm.yearlyFinalPrice = yearlyPrice - vm.discountPrice;
                    vm.yearlyFinalPrice = vm.yearlyFinalPrice.toFixed(2);
                }

            },
            changeCss: function () {
                $(".final-cost-div").css('display', 'none');
                $(".priceDisplay").css('display', 'none');
            },
            checkValidInput(inputStr) {
                if (inputStr.length > 0) {
                    let intRegex = /^\d+$/;
                    if (intRegex.test(inputStr) == false) {
                        this.tableHtml = '';
                        $(".final-cost-div").css('display', 'block')
                        return false;
                    }
                }
            }
        },
        mounted() {
            let vm = this
            vm.defaultHtml();
            this.$nextTick(function () {
                $(".final-cost-div").css('display', 'none');
                $(".priceDisplay").css('display', 'none');
            })
        },

    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
    .page-content-wrapper .page-content {
        margin-left: 40px !important;
    }

    table.table.pricing-tbl tr td:last-child, table.table.pricing-tbl tr th:last-child {
        text-align: right;
        padding-right: 33px;
    }
    .cost-format {
        text-align: right;
        background: rgb(32, 126, 190);
        color: white;
        font-weight: bold;
        font-size: 20px;
        border: none;
        padding: 4px 28px;
    }
    .price-format{
        background: none;
        border: none;
        color: white;
        font-size: 15px;
        padding: 4px 28px;
        text-align: right;
    }
    div.alert-danger {
        padding: 10px !important;
    }
    .h3-title {
        font-weight: 600 !important;
    }
    .pricing-des{
        border: 1px solid rgba(0, 0, 0, 0.26);
        margin: 10px 0px;
        padding: 0px 20px;
        background: rgba(0, 0, 0, 0.0392157);
    }
    .pricing-des:first-child {
        margin-top: 0;
    }
    .hide-div{
        display: block;
    }
    .show-div{
        display: block;
    }
</style>
