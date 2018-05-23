<template>
    <div>
        <div class="custom-loader" id="custom-loader"></div>
        <div class="clearfix"> </div>

        <div class="page-container">
            <div class="page-content-wrapper">
                <div class="page-content">
                    <div class="row">
                        <div class="col-md-1"></div>
                        <div class="col-md-7">
                            <h2 class="page-title"> Pricing
                                <small>Simple Pricing Calculator</small>
                            </h2>
                        </div>
                        <div class="col-md-4"></div>
                    </div>
                    <div class="row">
                        <form method="post" accept-charset="utf-8" id="pricing-form" @submit="checkForm" >
                            <div style="display:none;">
                                <input type="hidden" name="_method" value="POST"/>
                            </div>
                            <div class="col-md-1"></div>
                            <div class="col-md-7">
                                <div class="portlet solid blue"  style="border-radius: 5px !important;">
                                    <div class="portlet-title"  style="text-align: center; margin-bottom: 30px;">
                                        <h3 class="h3-title"><span class="price-intervals"> {{ intervalSelected }} </span> Pricing Calculator</h3>
                                    </div>
                                    <div class="portlet-body form" style="height:480px">
                                        <div class="row">
                                            <div class="col-md-1"></div>
                                            <div class="form-group col-md-10 err-alert" v-if="error == true">
                                                <div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">x</button>Please enter number of employees</div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-1"></div>
                                            <div class="form-group col-md-10">
                                                <span class="control-label col-md-8" style="font-size: 17px; line-height: 2;">How many employee do you want to add?</span>
                                                <div class="col-md-4" style="margin-top: 5px;">
                                                    <input type="number" name="no_of_emp" class="form-control emp-strength" placeholder="Enter # of employees" v-on:keyup="getEmpNum" v-model="no_of_employee" id="no-of-emp"/>                        
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
                                                <div class='info_alert' v-html="info_alert">
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
                                            <div class="col-md-10" v-if="intervalSelected == 'Yearly'">
                                                <div class="row">
                                                    <div class="col-md-3"></div>
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"> Total Price </label>
                                                        <div class="col-md-5">
                                                            <span type="text" class="form-control price-format" style="text-align:right;">$</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-1"></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-1"></div>
                                            <div class="col-md-10" v-if="intervalSelected == 'Yearly'">
                                                <div class="row">
                                                    <div class="col-md-3"></div>
                                                    <div class="form-group">
                                                        <label class="control-label col-md-4"> 10% Discount on Annual Payment  </label>
                                                        <div class="col-md-5"><span type="text" class="form-control price-format" style="text-align:right;">{{ currencySymbol }}</span>
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
                                                                <span type="text" class="form-control cost-format final-cost-price" style="text-align:right;">{{ currencySymbol }} {{ finalPrice }} </span>
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
                                        <div style="text-align: center; margin-top: 20px;"><a href="/register/trial-plan" class="btn btn-default mt-ladda-btn ladda-button " style="font-size:15px; font-weight:bold;color :grey;">Start Your Free Trial</a></div>
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
            <div class="page-footer-inner">  2018 &copy; 5 Star Moods LLC</div>
        </div>
    </div>
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
                finalPrice: 0.0,
                discount: 0.0,
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
                info_alert: '',
            };
        },
        methods: {
            checkForm: function (e) {
                if (this.no_of_employee == 0 || this.no_of_employee == null) {
                    this.error = true;
                } else {
                    this.error = false;
                }
                e.preventDefault();
            },

            getEmpNum: function (event) {
                let vm = this;
                vm.tableHtml = vm.finalPrice = vm.info_alert = '';
                vm.error = false;
                let planAmountArr = vm.planAmountArr;
                vm.no_of_employee = event.target.value;
                if (vm.no_of_employee == 0) {
                    vm.defaultHtml();
                    $(".final-cost-div").css('display', 'none');
                    $(".priceDisplay").css('display', 'none');
                } else if (vm.no_of_employee >= 1 && vm.no_of_employee <= 999) {
                    $.each(planAmountArr, function (key, obj) {
                        let perEmpAmount = obj.per_emp_amount;
                        perEmpAmount = perEmpAmount.toFixed(2);
                        this.totalPrice = parseFloat(obj.total_price);
                        if (this.intervalSelected == 'Yearly') {
                            this.totalPrice = obj.yearly_price;
                        }
                        this.totalPrice = parseFloat(this.totalPrice.toFixed(2));
                        if (this.no_of_employee > obj.max_emp) {
                            this.totalLimit = this.totalLimit + (obj.max_emp - this.totalLimit);
                            this.finalPrice = parseFloat(this.finalPrice) + parseFloat(this.totalPrice);
                            vm.tableHtml += "<tr><td>" + obj.limit + "</td><td>" + perEmpAmount + "</td><td> <span class='priceDisplay'>" + this.totalPrice.toFixed(2) + "</span></td></tr>";
                        } else {
                            if (this.no_of_employee >= 1 && this.no_of_employee <= 10) {
                                this.finalPrice = parseFloat(totalPrice);
                                vm.tableHtml += "<tr><td>" + obj.limit + "</td><td>" + perEmpAmount + "</td><td> <span class='priceDisplay'>" + this.totalPrice.toFixed(2) + "</span></td></tr>";
                            } else {
                                this.nextLimit = this.no_of_employee - this.totalLimit;
                                this.nextPriceAmount = this.nextLimit * obj.per_emp_amount;

                                this.nextPriceAmount = parseFloat(this.nextPriceAmount);
                                if (this.intervalSelected == 'Yearly') {
                                    this.nextPriceAmount = this.nextPriceAmount * 12;
                                }
                                this.finalPrice = parseFloat(this.finalPrice) + parseFloat(this.nextPriceAmount);
                                vm.tableHtml += "<tr><td>" + obj.limit + "</td><td>" + perEmpAmount + "</td><td> <span class='priceDisplay'>" + this.totalPrice.toFixed(2) + "</span></td></tr>";
                            }
                            return false;
                        }
                    });
                } else if (vm.no_of_employee >= 1000) {
                    vm.finalPrice = 0.0;
                    vm.info_alert = '<div class="alert alert-info"><button type="button" class="close close-info-btn" data-dismiss="alert" aria-hidden="true"></button><strong>For 1000 OR More employees</strong> Please  Contact Us</div>';
                    vm.defaultHtml();
                    $(".final-cost-div").css('display', 'none');
                    jQuery('a.schedule-contact-us-popup').on("click", function (event) {
                        contactUs(event);
                    });
                }

                if (vm.intervalSelected == 'Yearly') {
                    var yearlyPrice = vm.totalPrice = vm.finalPrice;
                    vm.discount = yearlyPrice * (10 / 100);
                    vm.discount = vm.discount.toFixed(2);
                    vm.finalPrice = yearlyPrice - vm.discount;
                }
            },
            defaultHtml() {
                let vm = this;
                vm.tableHtml = '';
                $.each(this.planAmountArr, function (key, obj) {
                    this.perEmpAmount = obj.per_emp_amount;
                    let totalPr = obj.total_price;
                    if (this.intervalSelected == 'Yearly') {
                        totalPr = obj.yearly_price;
                    }
                    vm.tableHtml += "<tr><td>" + obj.limit + "</td><td> $" + this.perEmpAmount.toFixed(2) + "</td><td><span class='priceDisplay'> $" + totalPr.toFixed(2) + "</span></td></tr>";
                });
            },
            isNumber: function (event) {
                var charCode = (event.which) ? event.which : event.keyCode;
                if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                    return false;
                }
                return true;
            },
            changeInterval: function (event) {
                if (event.target.value = 'Yearly') {
                    var yearlyPrice = this.totalPrice = this.finalPrice;
                    this.discount = yearlyPrice * (10 / 100);
                    this.discount = this.discount.toFixed(2);
                    this.finalPrice = yearlyPrice - this.discount;
                }
            }
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
